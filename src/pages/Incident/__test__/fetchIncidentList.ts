import axios from "axios";
export const fetchIncidents = async (
  params: Record<string, string>,
): Promise<unknown> => {
  try {
    const re = new URLSearchParams(params).toString();
    return await axios
      .get("/incidents?" + re)
      .then((result: any) =>
        result?.data.incidents.length > 0 ? result.data.incidents[0] : [],
      );
  } catch (err) {
    throw new Error("Error while fetching data");
  }
};
