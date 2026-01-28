import React from "react";
import avatar from "@/assets/ICON-AVATAR-WILL_T.png";

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
      <div className="text-center mt-2">
        <p className="flex items-center justify-center text-xs text-muted-foreground">
          <img src={avatar} alt="icon" className="inline h-6 w-6 mr-1" />
          Made by Will_T
        </p>
      </div>
    </>
  );
};

export default Footer;
