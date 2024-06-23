import { PageDataParams } from "../type/params";

const fetchCurrentPageContent = async ({novel_id,chapter_number}: PageDataParams): Promise<string> => {
  const response = await fetch(`http://lyyfsq.club:10001/getContent/${novel_id}/${chapter_number}`);
  const responseTitles = await response.text();
  return responseTitles;
}

export default fetchCurrentPageContent;