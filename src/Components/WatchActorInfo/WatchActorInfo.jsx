import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentActor } from "../../store/Slices/currentActor/currentActorSlice";

import "./watchactorinfo.css";
const WatchActorInfo = () => {
    const currentActor = useSelector(selectCurrentActor);
    return (
        <div className="actor-main-cont">
            <div className="actor-main">
                <div className="actor-main-img">
                    {currentActor.profile_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${currentActor.profile_path}`}
                            alt={currentActor.name}
                            title={currentActor.name}
                        />
                    )}
                </div>
                <div className="actor-main-info">
                    <h1 className="actor-name">{currentActor.name}</h1>
                    <span>
                        Alternative names:
                        <span className="overview-details">
                            <ul className="alternative-names">
                                {currentActor.also_known_as?.map((names) => {
                                    return <li key={names}>{names}</li>;
                                })}
                            </ul>
                        </span>
                    </span>
                    <span>
                        Borned:
                        <span className="overview-details">
                            {currentActor.birthday}
                        </span>
                    </span>
                    <span></span>
                    <span>
                        From:
                        <span className="overview-details">
                            {currentActor.place_of_birth}
                        </span>
                    </span>
                </div>
                <div className="actor-biograpy-cont">
                    <span className="actor-biography">
                        Biography :
                        {currentActor.biography ? (
                            <p className="overview-details">
                                {currentActor.biography}
                            </p>
                        ) : (
                            <p className="overview-details">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Totam, nulla amet. Quaerat
                                error, et, corrupti id earum sapiente ex ipsam,
                                quisquam molestiae cupiditate deleniti iure
                                doloremque quas blanditiis officia esse!
                                Inventore eos pariatur ad amet culpa cumque
                                possimus harum, distinctio vel similique,
                                incidunt odio expedita maiores ut nam eum odit
                                fugiat magni accusantium dolore delectus
                                obcaecati ducimus adipisci. Animi accusamus
                                veritatis nam corporis beatae perferendis
                                accusantium dolore tenetur at dolorum
                                doloremque, suscipit minima obcaecati
                                repellendus ea excepturi ipsa praesentium id
                                ducimus aspernatur consectetur quaerat. Possimus
                                cumque consequatur necessitatibus laudantium
                                eaque nihil nemo a explicabo quisquam?
                                Praesentium, porro voluptate. Eveniet omnis eum
                                rem impedit dolor nostrum facilis maiores autem
                                magni adipisci, laboriosam consequatur officiis
                                iure, repellat possimus dicta libero eaque
                                dolore asperiores? Asperiores magnam eos
                                laudantium. Vitae ipsa, obcaecati alias sed fuga
                                quasi illum ipsam ducimus? A dolore fuga
                                tenetur. Nam exercitationem alias asperiores,
                                rem porro unde et sed sint officia!
                            </p>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WatchActorInfo;
