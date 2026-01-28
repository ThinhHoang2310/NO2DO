import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Tốt lắm ! Bạn đã hoàn thành {completedTasksCount} việc
                {activeTasksCount > 0 &&
                  `, chỉ còn ${activeTasksCount} việc nữa thôi.Fighting!!!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Hãy bắt đầu làm {activeTasksCount} việc nào!!!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
