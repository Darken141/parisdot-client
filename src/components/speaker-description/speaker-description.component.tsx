import React from 'react'

export interface IProps {
  talkDescription?: string | JSX.Element
  speakerBio?: string | JSX.Element
  speakerName?: string
}

const SpeakerDescription = ({
  talkDescription,
  speakerBio,
  speakerName,
}: IProps) => {
  return (
    <div>
      {talkDescription && (
        <div>
          <h3>Details</h3>
          <p>{talkDescription}</p>
        </div>
      )}

      {speakerBio && (
        <div>
          <h3>{speakerName ?? 'Speaker bio'}</h3>
          <p>{speakerBio}</p>
        </div>
      )}
    </div>
  )
}

export default SpeakerDescription
