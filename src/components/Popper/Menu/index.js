import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "~/components/Layout/components/Header";

import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      visible
      interactive={true}
      placement="bottom-end"
      delay={[0, 700]}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            <Header title="Ngôn ngữ" />
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
