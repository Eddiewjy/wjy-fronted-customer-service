import React, { useState } from 'react';
import CustomerServiceButton from './components/CustomerServiceButton'; // 导入按钮组件
import AnswerWindow from './components/AnswerWindow'; // 导入答案窗口组件

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen((prev) => !prev); // 切换答案窗口的显示和隐藏
  };

  return (
    <div>
      <CustomerServiceButton onClick={toggleWindow} />

      {isOpen && <AnswerWindow />}
    </div>
  );
};

export default App;
