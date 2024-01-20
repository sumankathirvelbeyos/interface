import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.whiteVariationRectangle}>
      <div className={styles.whiteVariationRectangleChild} />
      <img
        className={styles.whiteVariation1}
        loading="eager"
        alt=""
        src="/white-variation-1@2x.png"
      />
      <div className={styles.whiteVariationRectangleInner}>
        <div className={styles.dataManagement3Parent}>
          <img
            className={styles.dataManagement3Icon}
            loading="eager"
            alt=""
            src="/datamanagement-3@2x.png"
          />
          <img
            className={styles.dataManagement2Icon}
            loading="eager"
            alt=""
            src="/datamanagement-2@2x.png"
          />
          <img
            className={styles.dataManagement1Icon}
            loading="eager"
            alt=""
            src="/datamanagement-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.inputFrame}>
        <img
          className={styles.dataManagement4Icon}
          loading="eager"
          alt=""
          src="/datamanagement-4@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
