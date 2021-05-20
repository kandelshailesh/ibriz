import moment from 'moment';
import axios from 'axios';

export const timestamptoDate = (timestamp: number): string => {
  return moment(new Date(timestamp * 1000)).format('YYYY-MM-DD');
};
export const fetchIncidents = async (
  params: Record<string, string>,
): Promise<unknown> => {
  try {
    const re = new URLSearchParams(params).toString();
    return await axios.get('/incidents?' + re).then((result) => result.data);
  } catch (err) {
    throw new Error('Error while fetching data');
  }
};
