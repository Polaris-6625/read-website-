import "./style.css";
import { setCurrentIndex, useCurrentIndex } from "../../store/currentIndex";
import { useEffect } from "react";
import { loadPageData, usePageData } from "../../store/pagesData";

function ReadContent() {
  const currentIndex = useCurrentIndex();
  const currentPageData = usePageData();
  // 上一页函数
  useEffect(() => {
    loadPageData({ novel_id: 1, chapter_number: currentIndex ?? 1 })
  }, [currentIndex])
  const goToPreviousPage = () => {
    setCurrentIndex(v => v - 1)
  };

  // 下一页函数
  const goToNextPage = () => {
    setCurrentIndex(v => v + 1)
  };

  return (
    <div>
      {/* 上一页和下一页按钮 */}
      <button onClick={goToPreviousPage} disabled={currentIndex === 1}>上一页</button>
      <button
        onClick={goToNextPage}
      // disabled={currentIndex === pagesData?.length}
      >
        下一页
      </button>

      {/* 读书器每一页的内容 */}
      <ul className="read-content-list">
        {/* 根据当前页面数据渲染内容 */}
        {currentPageData && (
          <li className="read-content-item">{currentPageData}</li>
        )}
      </ul>
    </div>
  );
}

export default ReadContent;