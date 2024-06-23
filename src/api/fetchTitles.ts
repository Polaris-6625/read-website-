import { ResponseTitles } from "../type/ResponseTitles";

const fetchTitles = async (novel_id: number): Promise<ResponseTitles> => {
  const response = await fetch(`http://lyyfsq.club:10001/getBookChapterTitles/${novel_id}`);
  const responseTitles = await response.json();
  return responseTitles;
}

export default fetchTitles;