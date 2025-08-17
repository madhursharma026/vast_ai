export default function DeployData() {
  return (
    <div class={`py-5 containerWidth px-4`}>
      <p
        className="responsive-heading lh-1 fw-semibold mt-5 pb-5"
        style={{ borderBottom: '2px solid black' }}
      >
        Deploy AI Workloads Instantly. Scale Anything.
      </p>

      <div
        className="row mt-5 pb-5"
        style={{ borderBottom: '2px solid black' }}
      >
        <div className="col-md-6">
          <div
            className={`h-100 d-flex flex-column justify-content-between`}
            style={{ maxWidth: '480px' }}
          >
            <div>
              <h2 className="lh-1 fw-semibold">
                Solutions for Every AI Workload
              </h2>
              <p className="fs-5 mt-3">
                Our flexible GPU Cloud can support use cases from AI Training,
                Fine Tuning, Inference, and beyond.
              </p>
            </div>
            <p className="fs-5 mt-3 text-decoration-underline mb-0">
              More About Use Cases <i className="fa fa-arrow-circle-right"></i>
            </p>
          </div>
        </div>

        <div className="col-md-6 mt-md-0 mt-5">
          <div
            className={`h-100 d-flex flex-column justify-content-between`}
            style={{ maxWidth: '480px' }}
          >
            <div>
              <h2 className="lh-1 fw-semibold">
                Start Fast with a Prebuilt Template
              </h2>
              <p className="fs-5 mt-3">
                Prebuilt templates include PyTorch, NVIDIA CUDA, TensorFlow,
                Ubuntu, and more—or build your own.
              </p>
            </div>
            <p className="fs-5 mt-3 text-decoration-underline mb-0">
              Explore Templates <i className="fa fa-arrow-circle-right"></i>
            </p>
          </div>
        </div>
      </div>

      <p className="responsive-heading lh-1 fw-semibold mt-5">
        Imagine What You Can Build: Use Cases
      </p>

      <div className="row mt-3">
        <div className="col-md-4 col-sm-6 px-4">
          <p className="mt-3 fs-5">AI Agents</p>
          <p className="mt-3 fs-5">AI Text Generation</p>
          <p className="mt-3 fs-5">Batch Data Processing</p>
          <p className="mt-3 fs-5">Virtual Computing </p>
        </div>
        <div className="col-md-4 col-sm-6 px-4">
          <p className="mt-3 fs-5">AI Fine Tuning</p>
          <p className="mt-3 fs-5">AI/ML Frameworks</p>
          <p className="mt-3 fs-5">GPU Programming</p>
        </div>
        <div className="col-md-4 col-sm-6 px-4">
          <p className="mt-3 fs-5">AI Image & Video Generation</p>
          <p className="mt-3 fs-5">Audio-to-Text</p>
          <p className="mt-3 fs-5">Graphics Rendering</p>
        </div>
      </div>
    </div>
  )
}
