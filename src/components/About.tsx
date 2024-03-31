// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="https://huhexian.s3.bitiful.net/pic/2024/03/488713009c150d641a1977ae3fb45cc7.webp" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">Bruce(HuHeXian)</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Human Resources</h2>
        </div>
      </div>

      <div>
        2024届毕业生，人力资源从业者，从2018年开始写<a href="https://yinji.org">博客</a>，在网络上记录生活。我有很多个标签，数码发烧友、摄影爱好者、blogger、WordPress 爱好者……
      </div>

      
    </div>
  );
};
