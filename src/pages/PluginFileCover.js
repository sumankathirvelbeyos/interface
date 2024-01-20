import FrameComponent from "../components/FrameComponent";
import styles from "./PluginFileCover.module.css";

const PluginFileCover = () => {
  return (
    <div className={styles.pluginFileCover9}>
      <div className={styles.frameContainer}>
        <FrameComponent />
        <div className={styles.arrowVector}>
          <div className={styles.cOText}>
            <img
              className={styles.cOTextChild}
              loading="eager"
              alt=""
              src="/arrow-1.svg"
            />
            <div className={styles.co2}>CO2</div>
          </div>
        </div>
      </div>
      <main className={styles.vectorEllipseFrame}>
        <section className={styles.userRectangle}>
          <div className={styles.emissionModuleText}>
            <div className={styles.ellipseShapeParent}>
              <div className={styles.ellipseShape}>
                <div className={styles.facilityText} />
                <img
                  className={styles.user51}
                  loading="eager"
                  alt=""
                  src="/user-5-1@2x.png"
                />
              </div>
              <h1 className={styles.emissionModule}>{`EMISSION MODULE `}</h1>
            </div>
          </div>
          <div className={styles.rectangleVector}>
            <div className={styles.emptyFrame}>
              <h1 className={styles.upstream}>UPSTREAM</h1>
              <div className={styles.emissions}>EMISSIONS</div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-10.svg"
                />
                <img
                  className={styles.vectorRectangleIcon}
                  alt=""
                  src="/facility-data.svg"
                />
                <img
                  className={styles.vectorRectangleIcon1}
                  alt=""
                  src="/facility-data1.svg"
                />
                <img
                  className={styles.vectorRectangleIcon2}
                  loading="eager"
                  alt=""
                  src="/vector-4.svg"
                />
                <div className={styles.vectorRectangle} />
                <div className={styles.vectorRectangle1} />
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
            <div className={styles.rectangleVectorInner}>
              <div className={styles.frameParent}>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.ellipseContainer}>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.frameChild1} />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild2} />
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/data-vectors.svg"
                      />
                      <img
                        className={styles.frameChild3}
                        alt=""
                        src="/data-vectors1.svg"
                      />
                      <img
                        className={styles.frameChild4}
                        loading="eager"
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.facilityParent}>
                  <h1 className={styles.facility}>FACILITY</h1>
                  <div className={styles.emissions1}>EMISSIONS</div>
                </div>
              </div>
            </div>
            <div className={styles.emissionsParent}>
              <div className={styles.emissions2}>EMISSIONS</div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-10.svg"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.vectorParent1}>
                    <img
                      className={styles.frameChild5}
                      loading="eager"
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.frameChild6}
                      alt=""
                      src="/vector-6.svg"
                    />
                    <img
                      className={styles.frameChild7}
                      alt=""
                      src="/vector-7.svg"
                    />
                    <div className={styles.frameChild8} />
                    <div className={styles.frameChild9} />
                    <div className={styles.frameChild10} />
                  </div>
                </div>
                <h1 className={styles.downstream}>DOWNSTREAM</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PluginFileCover;
