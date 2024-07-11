import "./style.css";
import { setCurrentIndex, useCurrentIndex } from "../../store/currentIndex";
import { useEffect } from "react";
import {
  loadPageData,
  usePageData,
  usePageDataLoading,
} from "../../store/pagesData";

function ReadContent() {
  // 订阅当前数据和页码
  const currentIndex = useCurrentIndex();
  const loading = usePageDataLoading();
  const currentPageData = usePageData();
  // 加载当前页面数据
  useEffect(() => {
    loadPageData({ novel_id: 1, chapter_number: currentIndex ?? 1 });
  }, [currentIndex]);

  // 上一页
  const goToPreviousPage = () => {
    setCurrentIndex((v) => v - 1);
  };

  // 下一页
  const goToNextPage = () => {
    setCurrentIndex((v) => v + 1);
  };

  return (
    <div>
      {/* 上一页和下一页按钮 */}
      <button onClick={goToPreviousPage} disabled={currentIndex === 1}>
        上一页
      </button>
      <button
        onClick={goToNextPage}
        // disabled={currentIndex === pagesData?.length}
      >
        下一页
      </button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul className="read-content-list">
          {currentPageData && (
            <li className="read-content-item">{currentPageData}</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ReadContent;
