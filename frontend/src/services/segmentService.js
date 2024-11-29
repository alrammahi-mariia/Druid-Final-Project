import axios from "axios";

const SEGMENT_API =
  "https://druid-final-project.lndo.site/api/mautic/process-segments";

const segmentService = {
  // Get current segment from storage
  getCurrentSegment: () => {
    return sessionStorage.getItem("currentSegment") || "";
  },

  // Clear all segment data
  clearSegments: () => {
    localStorage.removeItem("userSegments");
    sessionStorage.removeItem("currentSegment");
    sessionStorage.setItem("currentSegment", "");
  },

  shouldUpdateSegments: () => {
    // TEMPORARY: Force update if test mode is enabled
    const isTestMode = sessionStorage.getItem("segmentTestMode");
    if (isTestMode) {
      const lastTestUpdate = sessionStorage.getItem("lastTestUpdate");
      const testInterval = 5 * 1000; // 5 seconds for testing
      const isTestStale =
        !lastTestUpdate || Date.now() - parseInt(lastTestUpdate) > testInterval;

      if (isTestStale) {
        sessionStorage.setItem("lastTestUpdate", Date.now().toString());
        return true;
      }
    }

    // Regular conditions
    // 1. Check if last update was more than 60 minutes ago
    const lastUpdate = localStorage.getItem("lastSegmentUpdate");
    const updateInterval = 60 * 60 * 1000;
    const isStale =
      !lastUpdate || Date.now() - parseInt(lastUpdate) > updateInterval;

    // 2. Check if mtc_id changed
    const storedMtcId = localStorage.getItem("stored_mtc_id");
    const currentMtcId = localStorage.getItem("mtc_id");
    const mtcIdChanged = storedMtcId !== currentMtcId;

    return isStale || mtcIdChanged;
  },

  // Update segments from API
  updateSegments: async () => {
    // Only update if conditions are met
    if (!segmentService.shouldUpdateSegments()) {
      return segmentService.getCurrentSegment();
    }

    const mtcId = localStorage.getItem("mtc_id");
    if (!mtcId) {
      segmentService.clearSegments();
      return null;
    }

    try {
      const response = await axios.get(`${SEGMENT_API}/${mtcId}`);
      if (response.data?.segments?.length > 0) {
        const userSegment = response.data.segments[0];
        localStorage.setItem("userSegments", userSegment);
        sessionStorage.setItem("currentSegment", userSegment);
        // Store update time and current mtc_id
        localStorage.setItem("lastSegmentUpdate", Date.now().toString());
        localStorage.setItem("stored_mtc_id", mtcId);
        console.log("Stored segment:", userSegment);
        return userSegment;
      } else {
        segmentService.clearSegments();
        return null;
      }
    } catch (error) {
      console.error("Error processing segments:", error);
      segmentService.clearSegments();
      return null;
    }
  },
};

export default segmentService;
