# React Plugins

## 元素是否在可视区域

```ts
import { useEffect, useRef, useState } from "react";

const useElementVisibility: useElementVisibilityHook = (
  targetRef,
  options = { threshold: 0.1, once: true }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const target = targetRef.current;
    if (!target) {
      return;
    }
    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      console.log(entry.isIntersecting);

      if (entry.isIntersecting && observer.current) {
        observer.current.disconnect();
      }
    }, options);

    observer.current.observe(target);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, options]);

  return isVisible;
};

export default useElementVisibility;
```

### 使用举例

判断图片容器出现再赋值src，实现图片的懒加载

```ts
import useElementVisibility from "@/hooks/useElementVisibility";
import { ModuleTitle } from ".";
import { useRef } from "react";

const AppliationScenarios = ({
  dataSource,
  bgColor,
}: ApplicationScenariosProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useElementVisibility(ref);
  return (
    <section
      className="application-scenrios"
      style={{ backgroundColor: bgColor }}
    >
      <ModuleTitle title="Application Scenarios" />
      <div className="scenery-cards" ref={ref}>
        {dataSource.map((dataItem, index) => {
          return (
            <div
              key={index}
              className="scenery-card"
              style={{
                backgroundImage: `url(${isVisible ? dataItem.imgSrc : ""})`,
              }}
            >
              <p className="scenery-card-desc">{dataItem.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AppliationScenarios;
```
