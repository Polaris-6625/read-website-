import React, { useEffect } from 'react';
import "./style.css";
import { setCurrentPage, useCurrentPage } from "../../store/currentPage";
import { setPageData, usePageData } from "../../store/pagesData";

function ReadContent() {
  const pagesData = usePageData();
  const currentPage = useCurrentPage();

  // 获取当前页面的数据
  const currentPageData = pagesData?.find((page) => page.id === currentPage);
  // 上一页函数
  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      setCurrentPage(previousPage);
    }
  };

  // 下一页函数
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagesData?.length) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div>
      {/* 上一页和下一页按钮 */}
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>上一页</button>
      <button onClick={goToNextPage} disabled={currentPage === pagesData?.length}>下一页</button>

      {/* 读书器每一页的内容 */}
      <ul className="read-content-list">
        {/* 根据当前页面数据渲染内容 */}
        {currentPageData && (
          <li className="read-content-item">{currentPageData.content}</li>
        )}
      </ul>
    </div>
  );
}
// [{"id":1,"content":"第一页的内容","title":"第一页的标题"},{"id":2,"content":"第二页的内容","title":"第二页的标题"}]:object
// [{"id":1,"content":"第一页的内容","title":"第一页的标题"},{"id":2,"content":"第二页的内容","title":"第二页的标题"}]:object
// [{"id":1,"content":"第一页的内容","title":"第一页的标题"},{"id":2,"content":"第二页的内容","title":"第二页的标题"}]:object
export default ReadContent;