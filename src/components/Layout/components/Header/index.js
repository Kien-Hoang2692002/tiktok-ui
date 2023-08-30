import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faEnvelope,
  faPaperPlane,
  faMoon,
  faUser,
  faBookmark,
  faLightbulb,
  faGear,
  faCoins,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import images from "~/assets/images";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "jp",
          title: "日本語",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Chế độ tối",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  //Handler
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Yêu thích",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "Trung tâm Nhà sáng tạo LIVE",
      to: "/live_creators",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Đăng xuất",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Search */}
        <HeadlessTippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos "
              spellCheck="false"
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Tải lên">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy content="Tin nhắn">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Hộp thư">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Tải lên</Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                alt="Nguyen Van A"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/56ce3bf7d2e9dda0b17f1ef356adc381.jpeg?x-expires=1693551600&x-signature=v5eO4TGnm5vTe0yK%2BU2o699O9hQ%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
