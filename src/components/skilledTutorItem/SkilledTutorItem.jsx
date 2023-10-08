import React from "react";
import Tutor_1 from "../../assets/images/tutor-1.jpeg";
import "./SkilledTutorItem.scss";

function SkilledTutorItem() {
  return (
    <>
      <div className="tutors_tutor">
        <div className="tutor__title">
          <img className="title__image" src={Tutor_1} alt="" />
          <div className="title__name_position">
            <h6 className="name_position__name">Harry</h6>
            <p className="name_position__position">English tutor</p>
          </div>
          <div className="title__rate_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.7171 18.8913C14.2754 18.8913 13.7088 18.7496 13.0004 18.3329L10.5088 16.8579C10.2504 16.7079 9.75042 16.7079 9.50042 16.8579L7.00042 18.3329C5.52542 19.2079 4.65876 18.8579 4.26709 18.5746C3.88376 18.2913 3.28376 17.5663 3.67542 15.8996L4.26709 13.3413C4.33376 13.0746 4.20042 12.6163 4.00042 12.4163L1.93376 10.3496C0.900424 9.31628 0.983757 8.43294 1.12542 7.99961C1.26709 7.56628 1.71709 6.79961 3.15042 6.55794L5.80876 6.11628C6.05876 6.07461 6.41709 5.80794 6.52542 5.58294L8.00042 2.64128C8.66709 1.29961 9.54209 1.09961 10.0004 1.09961C10.4588 1.09961 11.3338 1.29961 12.0004 2.64128L13.4671 5.57461C13.5838 5.79961 13.9421 6.06628 14.1921 6.10794L16.8504 6.54961C18.2921 6.79128 18.7421 7.55794 18.8754 7.99128C19.0088 8.42461 19.0921 9.30794 18.0671 10.3413L16.0004 12.4163C15.8004 12.6163 15.6754 13.0663 15.7338 13.3413L16.3254 15.8996C16.7088 17.5663 16.1171 18.2913 15.7338 18.5746C15.5254 18.7246 15.1921 18.8913 14.7171 18.8913ZM10.0004 15.4913C10.4088 15.4913 10.8171 15.5913 11.1421 15.7829L13.6338 17.2579C14.3588 17.6913 14.8171 17.6913 14.9921 17.5663C15.1671 17.4413 15.2921 16.9996 15.1088 16.1829L14.5171 13.6246C14.3588 12.9329 14.6171 12.0413 15.1171 11.5329L17.1838 9.46628C17.5921 9.05794 17.7754 8.65794 17.6921 8.38294C17.6004 8.10794 17.2171 7.88294 16.6504 7.79128L13.9921 7.34961C13.3504 7.24128 12.6504 6.72461 12.3588 6.14128L10.8921 3.20794C10.6254 2.67461 10.2921 2.35794 10.0004 2.35794C9.70876 2.35794 9.37542 2.67461 9.11709 3.20794L7.64209 6.14128C7.35042 6.72461 6.65042 7.24128 6.00876 7.34961L3.35876 7.79128C2.79209 7.88294 2.40876 8.10794 2.31709 8.38294C2.22542 8.65794 2.41709 9.06628 2.82542 9.46628L4.89209 11.5329C5.39209 12.0329 5.65042 12.9329 5.49209 13.6246L4.90042 16.1829C4.70876 17.0079 4.84209 17.4413 5.01709 17.5663C5.19209 17.6913 5.64209 17.6829 6.37542 17.2579L8.86709 15.7829C9.18376 15.5913 9.59209 15.4913 10.0004 15.4913Z"
                fill="#FFF621"
              />
              <path
                d="M6.24967 7.08203L9.58301 2.4987C9.7219 2.35981 10.083 2.08203 10.4163 2.08203C10.7497 2.08203 12.2219 5.13759 12.9163 6.66536C14.1663 6.94314 16.7497 7.41536 17.083 7.08203C17.4997 6.66536 17.9163 8.7487 17.9163 9.16536C17.9163 9.58203 14.583 12.4003 14.583 13.332C14.583 13.7487 15.2775 15.832 15.833 16.6654L15.4163 17.4987L14.583 17.9154C13.1941 17.3598 10.2497 16.1654 9.58301 15.832C8.91634 15.4987 6.80523 17.082 5.83301 17.9154C5.41634 17.9154 4.49967 17.7487 4.16634 17.082C3.74967 16.2487 5.41634 12.4987 4.58301 12.082C3.74967 11.6654 2.08301 8.7487 2.08301 8.33203C2.08301 7.9987 4.86079 7.22092 6.24967 7.08203Z"
                fill="#FFF621"
              />
            </svg>
            <span className="title__rate">5</span>
          </div>
        </div>
        <p className="tutor__about">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="tutors_tutor">
        <div className="tutor__title">
          <img className="title__image" src={Tutor_1} alt="" />
          <div className="title__name_position">
            <h6 className="name_position__name">Harry</h6>
            <p className="name_position__position">English tutor</p>
          </div>
          <div className="title__rate_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.7171 18.8913C14.2754 18.8913 13.7088 18.7496 13.0004 18.3329L10.5088 16.8579C10.2504 16.7079 9.75042 16.7079 9.50042 16.8579L7.00042 18.3329C5.52542 19.2079 4.65876 18.8579 4.26709 18.5746C3.88376 18.2913 3.28376 17.5663 3.67542 15.8996L4.26709 13.3413C4.33376 13.0746 4.20042 12.6163 4.00042 12.4163L1.93376 10.3496C0.900424 9.31628 0.983757 8.43294 1.12542 7.99961C1.26709 7.56628 1.71709 6.79961 3.15042 6.55794L5.80876 6.11628C6.05876 6.07461 6.41709 5.80794 6.52542 5.58294L8.00042 2.64128C8.66709 1.29961 9.54209 1.09961 10.0004 1.09961C10.4588 1.09961 11.3338 1.29961 12.0004 2.64128L13.4671 5.57461C13.5838 5.79961 13.9421 6.06628 14.1921 6.10794L16.8504 6.54961C18.2921 6.79128 18.7421 7.55794 18.8754 7.99128C19.0088 8.42461 19.0921 9.30794 18.0671 10.3413L16.0004 12.4163C15.8004 12.6163 15.6754 13.0663 15.7338 13.3413L16.3254 15.8996C16.7088 17.5663 16.1171 18.2913 15.7338 18.5746C15.5254 18.7246 15.1921 18.8913 14.7171 18.8913ZM10.0004 15.4913C10.4088 15.4913 10.8171 15.5913 11.1421 15.7829L13.6338 17.2579C14.3588 17.6913 14.8171 17.6913 14.9921 17.5663C15.1671 17.4413 15.2921 16.9996 15.1088 16.1829L14.5171 13.6246C14.3588 12.9329 14.6171 12.0413 15.1171 11.5329L17.1838 9.46628C17.5921 9.05794 17.7754 8.65794 17.6921 8.38294C17.6004 8.10794 17.2171 7.88294 16.6504 7.79128L13.9921 7.34961C13.3504 7.24128 12.6504 6.72461 12.3588 6.14128L10.8921 3.20794C10.6254 2.67461 10.2921 2.35794 10.0004 2.35794C9.70876 2.35794 9.37542 2.67461 9.11709 3.20794L7.64209 6.14128C7.35042 6.72461 6.65042 7.24128 6.00876 7.34961L3.35876 7.79128C2.79209 7.88294 2.40876 8.10794 2.31709 8.38294C2.22542 8.65794 2.41709 9.06628 2.82542 9.46628L4.89209 11.5329C5.39209 12.0329 5.65042 12.9329 5.49209 13.6246L4.90042 16.1829C4.70876 17.0079 4.84209 17.4413 5.01709 17.5663C5.19209 17.6913 5.64209 17.6829 6.37542 17.2579L8.86709 15.7829C9.18376 15.5913 9.59209 15.4913 10.0004 15.4913Z"
                fill="#FFF621"
              />
              <path
                d="M6.24967 7.08203L9.58301 2.4987C9.7219 2.35981 10.083 2.08203 10.4163 2.08203C10.7497 2.08203 12.2219 5.13759 12.9163 6.66536C14.1663 6.94314 16.7497 7.41536 17.083 7.08203C17.4997 6.66536 17.9163 8.7487 17.9163 9.16536C17.9163 9.58203 14.583 12.4003 14.583 13.332C14.583 13.7487 15.2775 15.832 15.833 16.6654L15.4163 17.4987L14.583 17.9154C13.1941 17.3598 10.2497 16.1654 9.58301 15.832C8.91634 15.4987 6.80523 17.082 5.83301 17.9154C5.41634 17.9154 4.49967 17.7487 4.16634 17.082C3.74967 16.2487 5.41634 12.4987 4.58301 12.082C3.74967 11.6654 2.08301 8.7487 2.08301 8.33203C2.08301 7.9987 4.86079 7.22092 6.24967 7.08203Z"
                fill="#FFF621"
              />
            </svg>
            <span className="title__rate">5</span>
          </div>
        </div>
        <p className="tutor__about">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="tutors_tutor">
        <div className="tutor__title">
          <img className="title__image" src={Tutor_1} alt="" />
          <div className="title__name_position">
            <h6 className="name_position__name">Harry</h6>
            <p className="name_position__position">English tutor</p>
          </div>
          <div className="title__rate_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.7171 18.8913C14.2754 18.8913 13.7088 18.7496 13.0004 18.3329L10.5088 16.8579C10.2504 16.7079 9.75042 16.7079 9.50042 16.8579L7.00042 18.3329C5.52542 19.2079 4.65876 18.8579 4.26709 18.5746C3.88376 18.2913 3.28376 17.5663 3.67542 15.8996L4.26709 13.3413C4.33376 13.0746 4.20042 12.6163 4.00042 12.4163L1.93376 10.3496C0.900424 9.31628 0.983757 8.43294 1.12542 7.99961C1.26709 7.56628 1.71709 6.79961 3.15042 6.55794L5.80876 6.11628C6.05876 6.07461 6.41709 5.80794 6.52542 5.58294L8.00042 2.64128C8.66709 1.29961 9.54209 1.09961 10.0004 1.09961C10.4588 1.09961 11.3338 1.29961 12.0004 2.64128L13.4671 5.57461C13.5838 5.79961 13.9421 6.06628 14.1921 6.10794L16.8504 6.54961C18.2921 6.79128 18.7421 7.55794 18.8754 7.99128C19.0088 8.42461 19.0921 9.30794 18.0671 10.3413L16.0004 12.4163C15.8004 12.6163 15.6754 13.0663 15.7338 13.3413L16.3254 15.8996C16.7088 17.5663 16.1171 18.2913 15.7338 18.5746C15.5254 18.7246 15.1921 18.8913 14.7171 18.8913ZM10.0004 15.4913C10.4088 15.4913 10.8171 15.5913 11.1421 15.7829L13.6338 17.2579C14.3588 17.6913 14.8171 17.6913 14.9921 17.5663C15.1671 17.4413 15.2921 16.9996 15.1088 16.1829L14.5171 13.6246C14.3588 12.9329 14.6171 12.0413 15.1171 11.5329L17.1838 9.46628C17.5921 9.05794 17.7754 8.65794 17.6921 8.38294C17.6004 8.10794 17.2171 7.88294 16.6504 7.79128L13.9921 7.34961C13.3504 7.24128 12.6504 6.72461 12.3588 6.14128L10.8921 3.20794C10.6254 2.67461 10.2921 2.35794 10.0004 2.35794C9.70876 2.35794 9.37542 2.67461 9.11709 3.20794L7.64209 6.14128C7.35042 6.72461 6.65042 7.24128 6.00876 7.34961L3.35876 7.79128C2.79209 7.88294 2.40876 8.10794 2.31709 8.38294C2.22542 8.65794 2.41709 9.06628 2.82542 9.46628L4.89209 11.5329C5.39209 12.0329 5.65042 12.9329 5.49209 13.6246L4.90042 16.1829C4.70876 17.0079 4.84209 17.4413 5.01709 17.5663C5.19209 17.6913 5.64209 17.6829 6.37542 17.2579L8.86709 15.7829C9.18376 15.5913 9.59209 15.4913 10.0004 15.4913Z"
                fill="#FFF621"
              />
              <path
                d="M6.24967 7.08203L9.58301 2.4987C9.7219 2.35981 10.083 2.08203 10.4163 2.08203C10.7497 2.08203 12.2219 5.13759 12.9163 6.66536C14.1663 6.94314 16.7497 7.41536 17.083 7.08203C17.4997 6.66536 17.9163 8.7487 17.9163 9.16536C17.9163 9.58203 14.583 12.4003 14.583 13.332C14.583 13.7487 15.2775 15.832 15.833 16.6654L15.4163 17.4987L14.583 17.9154C13.1941 17.3598 10.2497 16.1654 9.58301 15.832C8.91634 15.4987 6.80523 17.082 5.83301 17.9154C5.41634 17.9154 4.49967 17.7487 4.16634 17.082C3.74967 16.2487 5.41634 12.4987 4.58301 12.082C3.74967 11.6654 2.08301 8.7487 2.08301 8.33203C2.08301 7.9987 4.86079 7.22092 6.24967 7.08203Z"
                fill="#FFF621"
              />
            </svg>
            <span className="title__rate">5</span>
          </div>
        </div>
        <p className="tutor__about">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="tutors_tutor">
        <div className="tutor__title">
          <img className="title__image" src={Tutor_1} alt="" />
          <div className="title__name_position">
            <h6 className="name_position__name">Harry</h6>
            <p className="name_position__position">English tutor</p>
          </div>
          <div className="title__rate_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.7171 18.8913C14.2754 18.8913 13.7088 18.7496 13.0004 18.3329L10.5088 16.8579C10.2504 16.7079 9.75042 16.7079 9.50042 16.8579L7.00042 18.3329C5.52542 19.2079 4.65876 18.8579 4.26709 18.5746C3.88376 18.2913 3.28376 17.5663 3.67542 15.8996L4.26709 13.3413C4.33376 13.0746 4.20042 12.6163 4.00042 12.4163L1.93376 10.3496C0.900424 9.31628 0.983757 8.43294 1.12542 7.99961C1.26709 7.56628 1.71709 6.79961 3.15042 6.55794L5.80876 6.11628C6.05876 6.07461 6.41709 5.80794 6.52542 5.58294L8.00042 2.64128C8.66709 1.29961 9.54209 1.09961 10.0004 1.09961C10.4588 1.09961 11.3338 1.29961 12.0004 2.64128L13.4671 5.57461C13.5838 5.79961 13.9421 6.06628 14.1921 6.10794L16.8504 6.54961C18.2921 6.79128 18.7421 7.55794 18.8754 7.99128C19.0088 8.42461 19.0921 9.30794 18.0671 10.3413L16.0004 12.4163C15.8004 12.6163 15.6754 13.0663 15.7338 13.3413L16.3254 15.8996C16.7088 17.5663 16.1171 18.2913 15.7338 18.5746C15.5254 18.7246 15.1921 18.8913 14.7171 18.8913ZM10.0004 15.4913C10.4088 15.4913 10.8171 15.5913 11.1421 15.7829L13.6338 17.2579C14.3588 17.6913 14.8171 17.6913 14.9921 17.5663C15.1671 17.4413 15.2921 16.9996 15.1088 16.1829L14.5171 13.6246C14.3588 12.9329 14.6171 12.0413 15.1171 11.5329L17.1838 9.46628C17.5921 9.05794 17.7754 8.65794 17.6921 8.38294C17.6004 8.10794 17.2171 7.88294 16.6504 7.79128L13.9921 7.34961C13.3504 7.24128 12.6504 6.72461 12.3588 6.14128L10.8921 3.20794C10.6254 2.67461 10.2921 2.35794 10.0004 2.35794C9.70876 2.35794 9.37542 2.67461 9.11709 3.20794L7.64209 6.14128C7.35042 6.72461 6.65042 7.24128 6.00876 7.34961L3.35876 7.79128C2.79209 7.88294 2.40876 8.10794 2.31709 8.38294C2.22542 8.65794 2.41709 9.06628 2.82542 9.46628L4.89209 11.5329C5.39209 12.0329 5.65042 12.9329 5.49209 13.6246L4.90042 16.1829C4.70876 17.0079 4.84209 17.4413 5.01709 17.5663C5.19209 17.6913 5.64209 17.6829 6.37542 17.2579L8.86709 15.7829C9.18376 15.5913 9.59209 15.4913 10.0004 15.4913Z"
                fill="#FFF621"
              />
              <path
                d="M6.24967 7.08203L9.58301 2.4987C9.7219 2.35981 10.083 2.08203 10.4163 2.08203C10.7497 2.08203 12.2219 5.13759 12.9163 6.66536C14.1663 6.94314 16.7497 7.41536 17.083 7.08203C17.4997 6.66536 17.9163 8.7487 17.9163 9.16536C17.9163 9.58203 14.583 12.4003 14.583 13.332C14.583 13.7487 15.2775 15.832 15.833 16.6654L15.4163 17.4987L14.583 17.9154C13.1941 17.3598 10.2497 16.1654 9.58301 15.832C8.91634 15.4987 6.80523 17.082 5.83301 17.9154C5.41634 17.9154 4.49967 17.7487 4.16634 17.082C3.74967 16.2487 5.41634 12.4987 4.58301 12.082C3.74967 11.6654 2.08301 8.7487 2.08301 8.33203C2.08301 7.9987 4.86079 7.22092 6.24967 7.08203Z"
                fill="#FFF621"
              />
            </svg>
            <span className="title__rate">5</span>
          </div>
        </div>
        <p className="tutor__about">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
}

export default SkilledTutorItem;
