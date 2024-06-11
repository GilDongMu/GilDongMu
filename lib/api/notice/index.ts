import axios from "@/lib/api/axios";

export const getNotice = async () => {
  const res = await axios.get(`/users/me`);
  return res.data;
};
