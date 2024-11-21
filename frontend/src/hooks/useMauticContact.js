import { useState, useEffect } from "react";
import axios from "axios";

const useMauticContact = () => {
  const [mauticSegments, setMauticSegments] = useState(null);
  const [contactId, setContactId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMauticData = async () => {
      try {
        // Get Contact ID from cookies
        const mtcId = document.cookie
          .split("; ")
          .find((row) => row.startsWith("mtc_id="))
          ?.split("=")[1];

        if (!mtcId) {
          setLoading(false);
          return;
        }

        setContactId(mtcId);

        // Fetch segments
        const response = await axios.get(
          `https://druid-final-project.lndo.site/api/mautic/process-segments/${mtcId}`
        );

        setMauticSegments(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching Mautic data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMauticData();
  }, []); // Run once on mount

  return {
    contactId,
    segments: mauticSegments,
    loading,
    error,
  };
};

export default useMauticContact;
