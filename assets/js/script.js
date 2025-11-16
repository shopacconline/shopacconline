const ITEMS_PER_PAGE = 4;

const padNumber = (value) => value.toString().padStart(2, "0");

const createSequentialImages = (prefix, count, extension = "jpg") =>
  Array.from({ length: count }, (_, index) => `${prefix}${index + 1}.${extension}`);

const createCategoryItems = (slug, baseItems, images, options = {}) => {
  const totalItems = options.totalItems ?? baseItems.length;
  const priceStep = options.priceStep ?? 20000;
  const cycleLength = baseItems.length;

  return Array.from({ length: totalItems }, (_, index) => {
    const template = baseItems[index % cycleLength];
    const cycle = Math.floor(index / cycleLength);
    const lotLabel = cycle > 0 ? ` (Lô ${cycle + 1})` : "";

    return {
      ...template,
      id: `${slug}-${padNumber(index + 1)}`,
      name: `${template.name} #${padNumber(index + 1)}`,
      price: template.price + cycle * priceStep,
      description: `${template.description}${lotLabel}`,
      highlights: [...template.highlights],
      image: images[index % images.length]
    };
  });
};

const valorantBaseItems = [
  {
    id: "valorant-01",
    name: "Valorant#01",
    price: 700000,
    rank: "Unrank",
    skins: "Kuronami",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Mail bảo hành"],
    image: "assets/img/valorant/acc1.jpg"
  },
  {
    id: "valorant-02",
    name: "Valorant#02",
    price: 600000,
    rank: "Bạc 3",
    skins: "Xenohunter",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail thư back"],
    image: "assets/img/valorant/acc2.jpg"
  },
  {
    id: "valorant-03",
    name: "Valorant#03",
    price: 500000,
    rank: "Bạc 3",
    skins: "Reaver, Chaos",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Mail bảo hành"],
    image: "assets/img/valorant/acc3.jpg"
  },
  {
    id: "valorant-04",
    name: "Valorant#04",
    price: 200000,
    rank: "Đồng 1",
    skins: "Singularity",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Mail bảo hành"],
    image: "assets/img/valorant/acc4.jpg"
  },
  {
    id: "valorant-05",
    name: "Valorant#05",
    price: 1000000,
    rank: "Bạc 2",
    skins: "Champion",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc5.jpg"
  },
  {
    id: "valorant-06",
    name: "Valorant#06",
    price: 500000,
    rank: "Bạch Kim 2",
    skins: "Primordium",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc6.jpg"
  },
  {
    id: "valorant-07",
    name: "Valorant#07",
    price: 1600000,
    rank: "Kim Cương 1",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc7.jpg"
  },
  {
    id: "valorant-08",
    name: "Valorant#08",
    price: 1000000,
    rank: "Thượng Nhân 1",
    skins: "Kuronami",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc8.jpg"
  },
  {
    id: "valorant-09",
    name: "Valorant#09",
    price: 1300000,
    rank: "Kim Cương 1",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc9.jpg"
  },
  {
    id: "valorant-10",
    name: "Valorant#10",
    price: 500000,
    rank: "Bạc 3",
    skins: "Kuronami",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc10.jpg"
  },
  {
    id: "valorant-11",
    name: "Valorant#11",
    price: 1200000,
    rank: "Kim Cương 1",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc11.jpg"
  },
  {
    id: "valorant-12",
    name: "Valorant#12",
    price: 400000,
    rank: "Unrank",
    skins: "Kuronami",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc12.jpg"
  },
  {
    id: "valorant-13",
    name: "Valorant#13",
    price: 500000,
    rank: "Unrank",
    skins: "Chaos",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc13.jpg"
  },
  {
    id: "valorant-14",
    name: "Valorant#14",
    price: 1200000,
    rank: "Kim Cương 3",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc14.jpg"
  },
  {
    id: "valorant-15",
    name: "Valorant#15",
    price: 900000,
    rank: "Bạc 1",
    skins: "Chaos, Champion",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc15.jpg"
  },
  {
    id: "valorant-16",
    name: "Valorant#16",
    price: 700000,
    rank: "Bạch Kim 3",
    skins: "Champion",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc16.jpg"
  },
  {
    id: "valorant-17",
    name: "Valorant#17",
    price: 500000,
    rank: "Kim Cương 1",
    skins: "VCT",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc17.jpg"
  },
  {
    id: "valorant-18",
    name: "Valorant#18",
    price: 400000,
    rank: "Thượng Nhân 1",
    skins: "Helix",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc18.jpg"
  },
  {
    id: "valorant-19",
    name: "Valorant#19",
    price: 600000,
    rank: "Đồng 1",
    skins: "Primordium",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc19.jpg"
  },
  {
    id: "valorant-20",
    name: "Valorant#20",
    price: 400000,
    rank: "Unrank",
    skins: "Kuronami",
    agents: "Full Agent",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Đổi full thông tin.",
    highlights: ["Drop mail gốc"],
    image: "assets/img/valorant/acc20.jpg"
  }
];

const lienquanBaseItems = [
  {
    id: "lienquan-01",
    name: "Acc#01",
    price: 500000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc1.jpg"
  },
  {
    id: "lienquan-02",
    name: "Acc#02",
    price: 300000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc2.jpg"
  },
  {
    id: "lienquan-03",
    name: "Acc#03",
    price: 300000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc3.jpg"
  },
  {
    id: "lienquan-04",
    name: "Acc#04",
    price: 500000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc4.jpg"
  },
  {
    id: "lienquan-05",
    name: "Acc#05",
    price: 400000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc5.jpg"
  },
  {
    id: "lienquan-06",
    name: "Acc#06",
    price: 250000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc6.jpg"
  },
  {
    id: "lienquan-07",
    name: "Acc#07",
    price: 550000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc7.jpg"
  },
  {
    id: "lienquan-08",
    name: "Acc#08",
    price: 400000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc8.jpg"
  },
  {
    id: "lienquan-09",
    name: "Acc#09",
    price: 500000,
    rank: "Tinh Anh",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc9.jpg"
  },
  {
    id: "lienquan-10",
    name: "Acc#10",
    price: 500000,
    rank: "Tinh Anh",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc10.jpg"
  },
  {
    id: "lienquan-11",
    name: "Acc#11",
    price: 300000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc11.jpg"
  },
  {
    id: "lienquan-12",
    name: "Acc#12",
    price: 450000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc12.jpg"
  },
  {
    id: "lienquan-13",
    name: "Acc#13",
    price: 500000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc13.jpg"
  },
  {
    id: "lienquan-14",
    name: "Acc#14",
    price: 400000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc14.jpg"
  },
  {
    id: "lienquan-15",
    name: "Acc#15",
    price: 600000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc15.jpg"
  },
  {
    id: "lienquan-16",
    name: "Acc#16",
    price: 550000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc16.jpg"
  },
  {
    id: "lienquan-17",
    name: "Acc#17",
    price: 400000,
    rank: "Cao Thủ",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc17.jpg"
  },
  {
    id: "lienquan-18",
    name: "Acc#18",
    price: 450000,
    rank: "Tinh Anh",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc18.jpg"
  },
  {
    id: "lienquan-19",
    name: "Acc#19",
    price: 400000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc19.jpg"
  },
  {
    id: "lienquan-20",
    name: "Acc#20",
    price: 700000,
    rank: "Kim Cương",
    skins: "Xem ảnh để biết chi tiết",
    agents: "Tướng: Full",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Nick full tướng, nhiều skin.",
    highlights: ["Trắng thông tin"],
    image: "assets/img/lienquan/acc20.jpg"
  }
];

const cursorBaseItems = [
  {
    id: "cursor-01",
    name: "Cursor Pro - 1 tháng",
    price: 250000,
    rank: "Tài khoản riêng",
    skins: "Quota 1M token",
    agents: "1 người dùng",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Phù hợp cho 1 cá nhân.",
    highlights: ["Cam kết chỉ 1 người dùng"],
    image: "assets/img/cursor/cursor-1thang.png"
  },
  {
    id: "cursor-02",
    name: "Cursor Pro - 1 năm",
    price: 1200000,
    rank: "Tài khoản riêng",
    skins: "Quota 6M token",
    agents: "1 người dùng",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Phù hợp cho 1 cá nhân.",
    highlights: ["Cam kết chỉ 1 người dùng"],
    image: "assets/img/cursor/cursor-1nam.png"
  }
];

const gptBaseItems = [
  {
    id: "gptpro-01",
    name: "GPT Pro - 1 tháng",
    price: 200000,
    rank: "Tài khoản riêng",
    skins: "GPT-5.1",
    agents: "5 người",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Phù hợp cho nhóm.",
    highlights: ["Có thể dùng được tối đa 5 người"],
    image: "assets/img/gptpro/gptpro-1thang.png"
  },
  {
    id: "gptpro-02",
    name: "GPT Pro - 1 tuần",
    price: 60000,
    rank: "Tài khoản riêng",
    skins: "GPT-5.1",
    agents: "5 người",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Phù hợp cho nhóm.",
    highlights: ["Có thể dùng được tối đa 5 người"],
    image: "assets/img/gptpro/gptpro-1tuan.png"
  },
  {
    id: "gptpro-03",
    name: "GPT Pro - 5 ngày",
    price: 40000,
    rank: "Tài khoản riêng",
    skins: "GPT-5.1",
    agents: "5 người",
    delivery: "Có sẵn",
    warranty: "1 Tháng",
    description: "Phù hợp cho nhóm.",
    highlights: ["Có thể dùng được tối đa 5 người"],
    image: "assets/img/gptpro/gptpro-5ngay.png"
  }
];

const netflixBaseItems = [
  {
    id: "netflix-01",
    name: "Netflix Premium - 1 ngày",
    price: 10000,
    rank: "4K UHD",
    skins: "1 người dùng",
    agents: "Mobile/PC",
    delivery: "Có sẵn",
    warranty: "1 ngày",
    description: "Tài khoản Netflix Premium chất lượng.",
    highlights: ["1 người dùng"],
    image: "assets/img/netflix/netflix-1ngay.png"
  },
  {
    id: "netflix-02",
    name: "Netflix Premium - 1 tháng",
    price: 85000,
    rank: "4K UHD",
    skins: "1 người dùng",
    agents: "Mobile/PC",
    delivery: "Có sẵn",
    warranty: "1 tháng",
    description: "Tài khoản Netflix Premium chất lượng.",
    highlights: ["1 người dùng"],
    image: "assets/img/netflix/netflix-1thang.png"
  },
  {
    id: "netflix-03",
    name: "Netflix Premium - 1 tuần",
    price: 30000,
    rank: "4k UHD",
    skins: "1 người dùng",
    agents: "Mobile/PC",
    delivery: "Có sẵn",
    warranty: "1 tuần",
    description: "Tài khoản Netflix Premium chất lượng.",
    highlights: ["1 người dùng"],
    image: "assets/img/netflix/netflix-1tuan.png"
  }
];

const baseConfigs = {
  valorant: {
    title: "Valorant",
    accent: "primary",
    description: "Nick Valorant xả kho.",
    baseItems: valorantBaseItems,
    images: createSequentialImages("assets/img/valorant/acc", 20),
    priceStep: 25000,
    customItems: valorantBaseItems,
    discountPercent: 50
  },
  lienquan: {
    title: "Liên Quân",
    accent: "danger",
    description: "Nick Liên Quân xả kho",
    baseItems: lienquanBaseItems,
    images: createSequentialImages("assets/img/lienquan/acc", 20),
    priceStep: 20000,
    customItems: lienquanBaseItems,
    discountPercent: 40,
    showCountInfo: false
  },
  cursor: {
    title: "Cursor",
    accent: "info",
    description: "Dịch vụ Cursor Pro chính hãng cho lập trình viên.",
    baseItems: cursorBaseItems,
    images: ["assets/img/cursor/cursor-1thang.png", "assets/img/cursor/cursor-1nam.png"],
    priceStep: 15000,
    customItems: cursorBaseItems,
    discountPercent: 30
  },
  gptpro: {
    title: "GPT Pro",
    accent: "success",
    description: "Tài khoản GPT Pro.",
    baseItems: gptBaseItems,
    images: [
      "assets/img/gptpro/gptpro-1tuan.png",
      "assets/img/gptpro/gptpro-1thang.png",
      "assets/img/gptpro/gptpro-5ngay.png"
    ],
    priceStep: 30000,
    customItems: gptBaseItems,
    discountPercent: 20
  },
  netflix: {
    title: "Netflix",
    accent: "danger",
    description: "Tài khoản Netflix Premium.",
    baseItems: netflixBaseItems,
    images: [
      "assets/img/netflix/netflix-1ngay.png",
      "assets/img/netflix/netflix-1tuan.png",
      "assets/img/netflix/netflix-1thang.png"
    ],
    priceStep: 5000,
    customItems: netflixBaseItems,
    discountPercent: 15
  }
};

const applyDiscountInfo = (price, discountPercent) => {
  const percent = typeof discountPercent === "number" && discountPercent > 0 ? discountPercent : 0;
  if (!percent) {
    return { discountPercent: 0, originalPrice: price };
  }
  const originalPrice = Math.round(price / (1 - percent / 100));
  return { discountPercent: percent, originalPrice };
};

const productData = Object.fromEntries(
  Object.entries(baseConfigs).map(([slug, config]) => {
    const items = config.customItems
      ? config.customItems
      : createCategoryItems(slug, config.baseItems, config.images, {
          totalItems: config.images.length,
          priceStep: config.priceStep
        });

    const itemsWithDiscount = items.map((item, index) => {
      const itemDiscount =
        typeof item.discountPercent === "number" ? item.discountPercent : config.discountPercent || 0;
      const { discountPercent, originalPrice } = applyDiscountInfo(item.price, itemDiscount);
      return {
        ...item,
        discountPercent,
        originalPrice,
        image: item.image || config.images?.[index % config.images.length]
      };
    });

    return [
      slug,
      {
        title: config.title,
        accent: config.accent,
        description: config.description,
        items: itemsWithDiscount,
        showCountInfo: config.showCountInfo !== false
      }
    ];
  })
);

const formatCurrency = (amount) => `${amount.toLocaleString("vi-VN")}đ`;
const getCategoryLink = (slug, page = 1) => `category.html?category=${slug}&page=${page}`;

const buildProductCard = (product, categorySlug, options = {}) => {
    const card = document.createElement("div");
    card.className = "product-card";
    const pageQuery = options.page ? `&page=${options.page}` : "";
    const discountBadge =
      product.discountPercent > 0
        ? `<span class="badge bg-danger-subtle text-danger ms-2">-${product.discountPercent}%</span>`
        : "";
    const originalPrice =
      product.originalPrice && product.originalPrice > product.price
        ? `<span class="price-original">${formatCurrency(product.originalPrice)}</span>`
        : "";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-body">
        <span class="badge-soft">${product.rank}</span>
        <h5 class="mb-1">${product.name}</h5>
        <div class="product-meta">Tình trạng: ${product.delivery} · ${product.warranty}</div>
        <div class="product-meta">Gói nổi bật: ${product.skins}</div>
        <div class="product-price">
          ${formatCurrency(product.price)}
          ${discountBadge}
          ${originalPrice}
        </div>
      </div>
      <div class="product-footer">
        <small class="text-muted">${product.agents}</small>
        <a class="btn btn-sm btn-primary" href="product.html?category=${categorySlug}&product=${product.id}${pageQuery}">
          Xem chi tiết
        </a>
      </div>
    `;
    return card;
  };

const buildPreviewCard = (slug, category) => {
  const card = document.createElement("div");
  card.className = "category-preview-card";
  card.innerHTML = `
    <div class="d-flex justify-content-between align-items-start gap-3">
      <div>
        <h4 class="mb-1">${category.title}</h4>
        <p class="text-muted small mb-0">${category.description}</p>
      </div>
      <span class="badge bg-primary-subtle text-primary">${category.items.length} acc</span>
    </div>
    <p class="mb-3 text-muted small">4 trang · 5 acc/trang · cập nhật mỗi ngày</p>
    <a class="btn btn-outline-primary" href="${getCategoryLink(slug, 1)}">Đi tới ${category.title}</a>
  `;
  return card;
};

const renderCategoryMenu = (container, activeSlug) => {
  if (!container) return;
  const list = document.createElement("div");
  list.className = "list-group";

  Object.entries(productData).forEach(([slug, category]) => {
    const link = document.createElement("a");
    link.className = "list-group-item list-group-item-action";
    link.href = getCategoryLink(slug, 1);

    const badgeClass = slug === activeSlug ? "badge bg-white text-primary" : "badge text-bg-light";
    if (slug === activeSlug) {
      link.classList.add("active");
    }

    link.innerHTML = `
      <span>${category.title}</span>
      <span class="${badgeClass}">${category.items.length}</span>
    `;

    list.appendChild(link);
  });

  container.innerHTML = "";
  container.appendChild(list);
};

const renderFeaturedProducts = () => {
  const grid = document.querySelector("[data-featured-products]");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  Object.entries(productData).forEach(([slug, category]) => {
    const product = category.items[0];
    if (!product) return;
    const col = document.createElement("div");
    col.className = "col-md-6 col-xl-4";
    col.appendChild(buildProductCard(product, slug, { page: 1 }));
    fragment.appendChild(col);
  });
  grid.appendChild(fragment);
};

const renderCategoryPreview = () => {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  const fragment = document.createDocumentFragment();
  Object.entries(productData).forEach(([slug, category]) => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.appendChild(buildPreviewCard(slug, category));
    fragment.appendChild(col);
  });
  grid.appendChild(fragment);
};

const renderHomePage = () => {
  renderCategoryMenu(document.querySelector("[data-category-menu]"));
  renderFeaturedProducts();
  renderCategoryPreview();
};

const renderPagination = (slug, currentPage, totalPages) => {
  const pagination = document.querySelector("[data-pagination]");
  if (!pagination) return;
  pagination.innerHTML = "";

  for (let page = 1; page <= totalPages; page += 1) {
    const li = document.createElement("li");
    li.className = `page-item${page === currentPage ? " active" : ""}`;
    const link = document.createElement("a");
    link.className = "page-link";
    link.href = getCategoryLink(slug, page);
    link.textContent = page;
    li.appendChild(link);
    pagination.appendChild(li);
  }
};

const renderCategoryPage = () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("category") || "valorant";
  const requestedPage = Number(params.get("page")) || 1;

  const category = productData[slug];
  const titleEl = document.getElementById("category-title");
  const descEl = document.getElementById("category-description");
  const breadcrumbEl = document.getElementById("category-breadcrumb");
  const grid = document.querySelector("[data-category-grid]");

  renderCategoryMenu(document.querySelector("[data-category-menu]"), category ? slug : undefined);

  if (!category) {
    if (titleEl) titleEl.textContent = "Không tìm thấy danh mục";
    if (descEl) descEl.textContent = "Vui lòng quay lại trang chủ và chọn một danh mục hợp lệ.";
    if (breadcrumbEl) breadcrumbEl.textContent = "Danh mục";
    if (grid) {
      grid.innerHTML = '<div class="col-12"><div class="alert alert-warning">Danh mục bạn yêu cầu không tồn tại.</div></div>';
    }
    const pagination = document.querySelector("[data-pagination]");
    if (pagination) pagination.innerHTML = "";
    return;
  }

  const totalPages = Math.max(1, Math.ceil(category.items.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = category.items.slice(start, start + ITEMS_PER_PAGE);

  if (titleEl) titleEl.textContent = category.title;
  if (descEl) {
    descEl.textContent = category.description;
  }
  if (breadcrumbEl) breadcrumbEl.textContent = `Danh mục / ${category.title}`;
  document.title = `${category.title} · Shop Acc Online`;

  if (grid) {
    grid.innerHTML = "";
    const fragment = document.createDocumentFragment();
    pageItems.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-6";
      col.appendChild(buildProductCard(product, slug, { page: currentPage }));
      fragment.appendChild(col);
    });
    grid.appendChild(fragment);
  }

  renderPagination(slug, currentPage, totalPages);
};

const renderDetailPage = () => {
  const params = new URLSearchParams(window.location.search);
  const categorySlug = params.get("category");
  const productId = params.get("product");
  const pageFromList = params.get("page") || 1;
  const category = productData[categorySlug];
  const product = category?.items.find((item) => item.id === productId);

  const heroTitle = document.getElementById("product-name");
  const heroDescription = document.getElementById("product-description");
  const breadcrumbs = document.getElementById("breadcrumbs");
  const priceTag = document.getElementById("product-price");
  const discountTag = document.getElementById("product-discount");
  const originalPriceTag = document.getElementById("product-original-price");
  const infoList = document.getElementById("product-info-list");
  const highlightList = document.getElementById("highlight-list");
  const galleryImg = document.getElementById("product-image");
  const detailWrapper = document.getElementById("product-detail-wrapper");
  const backButton = document.getElementById("back-to-category");

  if (!product || !heroTitle || !infoList) {
    if (detailWrapper) {
      detailWrapper.innerHTML =
        '<div class="alert alert-warning">Không tìm thấy sản phẩm bạn yêu cầu. Vui lòng quay lại trang chủ.</div>';
    }
    if (breadcrumbs) breadcrumbs.textContent = "Shop Acc Online";
    return;
  }

  heroTitle.textContent = product.name;
  heroDescription.textContent = product.description;
  if (breadcrumbs) {
    breadcrumbs.innerHTML = `
      <a href="index.html" class="text-white-50">Trang chủ</a>
      <span class="mx-2 text-white-50">/</span>
      <a href="${getCategoryLink(categorySlug, pageFromList)}" class="text-white-50">${category.title}</a>
      <span class="mx-2 text-white-50">/</span>
      <span>${product.name}</span>
    `;
  }

  if (backButton) {
    backButton.href = getCategoryLink(categorySlug, pageFromList);
  }

  priceTag.textContent = formatCurrency(product.price);
  if (discountTag) {
    if (product.discountPercent > 0) {
      discountTag.textContent = `-${product.discountPercent}%`;
      discountTag.classList.remove("d-none");
    } else {
      discountTag.textContent = "";
      discountTag.classList.add("d-none");
    }
  }
  if (originalPriceTag) {
    originalPriceTag.textContent =
      product.originalPrice && product.originalPrice > product.price
        ? formatCurrency(product.originalPrice)
        : "";
  }

  const info = [
    { label: "Hạng / Gói", value: product.rank },
    { label: "Gói nổi bật", value: product.skins },
    { label: "Trạng thái", value: product.delivery },
    { label: "Bảo hành", value: product.warranty },
    { label: "Giảm giá", value: product.discountPercent > 0 ? `-${product.discountPercent}%` : "Không" },
    { label: "Ghi chú", value: product.agents }
  ];

  infoList.innerHTML = info
    .map((item) => `<li class="mb-2"><strong>${item.label}:</strong> ${item.value}</li>`)
    .join("");

  highlightList.innerHTML = product.highlights.map((text) => `<li>${text}</li>`).join("");
  galleryImg.src = product.image;
  galleryImg.alt = product.name;

  document.title = `${product.name} · Shop Acc Online`;

  const buyButton = document.querySelector("[data-action='buy-product']");
  if (buyButton) {
    buyButton.addEventListener("click", () => {
      alert("Số dư của bạn không đủ để mua sản phẩm này. Vui lòng nạp thêm tiền.");
      window.location.href = "topup.html";
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const page = document.body.dataset.page;
  if (page === "home") {
    renderHomePage();
  } else if (page === "category") {
    renderCategoryPage();
  } else if (page === "product") {
    renderDetailPage();
  }
});


