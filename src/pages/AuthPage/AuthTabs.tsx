/* eslint-disable react/no-unused-prop-types */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';

interface AuthTabsProps {
  onTabChange?: (tab: string) => void;
  preselectedTab: number;
}

function AuthTabs({ onTabChange = () => {} }: AuthTabsProps) {
  const authenticationTabs: { label: string; link: string }[] = [
    { label: 'Login', link: '/login' },
    { label: 'Register', link: '/register' },
  ];

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    const currentTab = authenticationTabs.findIndex((tab) => location.pathname === tab.link);
    if (currentTab !== -1) {
      setSelectedTab(currentTab);
      onTabChange(authenticationTabs[currentTab].label);
    }
  }, [location.pathname, authenticationTabs, onTabChange]);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    onTabChange(authenticationTabs[index].label);
  };

  return (
    <Tabs
      tabs={authenticationTabs.map((tab) => tab.label)}
      links={authenticationTabs.map((tab) => tab.link)}
      onTabChange={handleTabChange}
      preselectedTab={selectedTab}
      isUppercase
    />
  );
}

export default AuthTabs;
