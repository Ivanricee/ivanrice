import { useEffect, useRef } from 'react'

interface Props {
  id: string
}

export function CloudinaryVideo(props: Props) {
  const { id } = props
  const videoRef = useRef(null)
  const cloudinaryRef = useRef<any>(null)
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    if (videoRef.current && cloudinaryRef.current) {
      cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloudName: 'ivanrice-c',
        controls: true,
        muted: false,
        pictureInPictureToggle: true,
        hideContextMenu: true,
        autoplay: false,
        loop: true,
        aspectRatio: '16:9',
        width: '100%',
        cLimit: 'fit',
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="h-full w-full rounded bg-transparent object-contain "
      data-cld-public-id={id}
    />
  )
}
