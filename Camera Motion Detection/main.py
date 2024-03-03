import cv2
import time
import datetime
import imutils

def detection():
    video_cap = cv2.VideoCapture(0)
    time.sleep(2)

    first_frame = None

    while True:
        frame = video_cap.read()[1]
        text = "Unoccupied"

        grey_scale_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        gaussian_frame = cv2.GaussianBlur(grey_scale_frame, (21, 21), 0)
        blur_frame = cv2.blur(gaussian_frame, (5,5))

        grey_scale_image = blur_frame

        if first_frame is None:
            first_frame = grey_scale_image
        else:
            pass

        frame = imutils.resize(frame, width=500)
        frame_delta = cv2.absdiff(first_frame, grey_scale_image)

        thresh = cv2.threshold(frame_delta, 100, 225, cv2.THRESH_BINARY)[1]
        dilate_img = cv2.dilate(thresh, None, iterations=2)

        cnt = cv2.findContours(dilate_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        for c in cnt:
            if cv2.contourArea(c) < 800:
                continue
            
            (x, y, w, h) = cv2.boundingRect(c)
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            text = "Occupied!"
    
        font = cv2.FONT_HERSHEY_COMPLEX
        cv2.putText(frame, f"[+] Status: {text}", (10, 20), font, 0.5, (0,0,255), 2)

        cv2.putText(frame, datetime.datetime.now(), (10, frame.shape[0] - 10), font, 0.35, (0,0,255), 1)

        cv2.imshow("Camera Detection", frame)
        cv2.imshow("Threshold Mask", dilate_img)
        cv2.imshow("Frame Delta", frame_delta)

        key = cv2.waitKey(1) & 0xFF

        if key == ord('q'):
            cv2.destroyAllWindows()
            break

if __name__ == "__main__":
    detection()