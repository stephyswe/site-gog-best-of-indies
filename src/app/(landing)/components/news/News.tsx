export const LandingNews = () => (
    <div className="container">
      <div gog-news="" className="news-section-wrapper">
        <div className="section-title js-section-title section-title--with-border        ">
          <div className="section-title__icon-wrapper">
            <svg className="icon-wrapper-icon">
              <use xlinkHref="/svg/bf869f22.svg#icon-megaphone" />
            </svg>
          </div>
          <div className="section-title__title-wrapper">News</div>
        </div>
        <div className="news-section__body">
          {/**/}
          <div ng-if="gogNews.news.length > 0">
            <div
              className="carousel news__carousel scrollbar-17 is-ready"
              gog-slider=""
              data-with-dynamic-content="true"
              data-overflow-class="carousel__items-container"
              data-with-spacing={1}
            >
              <div className="_gog-module-slider__items-container carousel__items-container has-product-tiles-and-transform">
                <div className="js-items-wrapper" style={{ width: 3360 }}>
                  <div className="news-section">
                    {/**/}
                    {/**/}
                    <div
                      ng-repeat="news in gogNews.news"
                      ng-if="($index === 0) || (($index - 3) % 4 === 0)"
                      className="js-item carousel__item news-section__group"
                    >
                      <div className="news-section__group-wrapper">
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper news-tile-wrapper--big"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-2.gog-statics.com/bcc969041917d65bcfb46dac43a20afbe75ffb492c4e0586b0d1810865f55523_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/update_mini_metro_the_miniversary_update "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost1" }'
                            href="https://www.gog.com/en/news/update_mini_metro_the_miniversary_update "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-2.gog-statics.com/bcc969041917d65bcfb46dac43a20afbe75ffb492c4e0586b0d1810865f55523_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Update: <b>Mini Metro - The Miniversary Update</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                6
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              9 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-1.gog-statics.com/deca4725e4ef91e3a724f238eb13575abd9a208739523599055f9f8d65c9636a_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/early_access_almastriga_relics_of_azathoth "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost2" }'
                            href="https://www.gog.com/en/news/early_access_almastriga_relics_of_azathoth "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-1.gog-statics.com/deca4725e4ef91e3a724f238eb13575abd9a208739523599055f9f8d65c9636a_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Early Access: <b>Almastriga: Relics of Azathoth</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                8
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              11 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-4.gog-statics.com/e66f4796889172e821d628013da1ffefa239eaf20104efb36e01e5876a27df21_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/slayin_it_sale_awesome_hack_slash_games_on_discounts_up_to_90 "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost3" }'
                            href="https://www.gog.com/en/news/slayin_it_sale_awesome_hack_slash_games_on_discounts_up_to_90 "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-4.gog-statics.com/e66f4796889172e821d628013da1ffefa239eaf20104efb36e01e5876a27df21_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              <b>
                                Slayin’ It Sale – awesome Hack and Slash games on
                                discounts up to -90%!
                              </b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                20
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              13 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    <div
                      ng-repeat="news in gogNews.news"
                      ng-if="($index === 0) || (($index - 3) % 4 === 0)"
                      className="js-item carousel__item news-section__group"
                    >
                      <div className="news-section__group-wrapper">
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-4.gog-statics.com/046dbea7eb1d4dbc60816a1367acfbf941273d08f164d31337540a2af1cff0c6_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/dv_rings_of_saturn_is_out_of_early_access_and_with_a_25_discount "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost1" }'
                            href="https://www.gog.com/en/news/dv_rings_of_saturn_is_out_of_early_access_and_with_a_25_discount "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-4.gog-statics.com/046dbea7eb1d4dbc60816a1367acfbf941273d08f164d31337540a2af1cff0c6_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              <b>
                                ΔV: Rings of Saturn is out of early access and
                                with a -25% discount!
                              </b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                6
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              13 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-3.gog-statics.com/c36b510c2fd439c6b334dea80263303b96d0876f80634651c46b22dd0fc96762_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/release_super_catboy "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost2" }'
                            href="https://www.gog.com/en/news/release_super_catboy "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-3.gog-statics.com/c36b510c2fd439c6b334dea80263303b96d0876f80634651c46b22dd0fc96762_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Release: <b>Super Catboy</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                7
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              14 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-2.gog-statics.com/7f98209cbc99facd267827e8fd377adf0da6e5e4226aff1f553b0872fb2c0178_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/release_axe_cop "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost3" }'
                            href="https://www.gog.com/en/news/release_axe_cop "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-2.gog-statics.com/7f98209cbc99facd267827e8fd377adf0da6e5e4226aff1f553b0872fb2c0178_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Release: <b>Axe Cop</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                8
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              14 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-1.gog-statics.com/78604ba46bc8235474b147182f15c8b4d59b70dd6e8cf77f52bbe3b06c92983d_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/release_showgunners_security_breach_dlc_available_for_free "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost4" }'
                            href="https://www.gog.com/en/news/release_showgunners_security_breach_dlc_available_for_free "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-1.gog-statics.com/78604ba46bc8235474b147182f15c8b4d59b70dd6e8cf77f52bbe3b06c92983d_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Release:{" "}
                              <b>
                                Showgunners - Security Breach DLC available for
                                free!
                              </b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                1
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              15 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    <div
                      ng-repeat="news in gogNews.news"
                      ng-if="($index === 0) || (($index - 3) % 4 === 0)"
                      className="js-item carousel__item news-section__group"
                    >
                      <div className="news-section__group-wrapper">
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-4.gog-statics.com/80129a703ecab9373e8ccc7a95ccf44d88eb639fa4eb46f6b55a3f9ccdf6a439_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/release_lorettas_brandnew_job_from_kagura_games "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost1" }'
                            href="https://www.gog.com/en/news/release_lorettas_brandnew_job_from_kagura_games "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-4.gog-statics.com/80129a703ecab9373e8ccc7a95ccf44d88eb639fa4eb46f6b55a3f9ccdf6a439_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Release:{" "}
                              <b>Lorettas Brand-New Job from Kagura Games</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                11
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              15 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-3.gog-statics.com/5b211a66d95cdbe328faa359915d4712a2325259582a3f0f29ec42328a790219_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/weekly_sale_up_to_90_on_a_variety_of_great_titles "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost2" }'
                            href="https://www.gog.com/en/news/weekly_sale_up_to_90_on_a_variety_of_great_titles "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-3.gog-statics.com/5b211a66d95cdbe328faa359915d4712a2325259582a3f0f29ec42328a790219_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Weekly Sale:{" "}
                              <b>up to -90% on a variety of great titles</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                11
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              19 hours ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-4.gog-statics.com/dd62da0df756ca8ac37a0eef1edd60428811580cc287c3bf2c6b3fd286e13f33_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/update_on_technical_issues_affecting_downloading_and_updating_games "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost3" }'
                            href="https://www.gog.com/en/news/update_on_technical_issues_affecting_downloading_and_updating_games "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-4.gog-statics.com/dd62da0df756ca8ac37a0eef1edd60428811580cc287c3bf2c6b3fd286e13f33_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              <b>
                                Update on technical issues affecting downloading
                                and updating games
                              </b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                839
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              3 days ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                        <div
                          ng-repeat="news in gogNews.news |
                                limitTo: ($index === 0 ? 3 : 4) : $parent.$index"
                          className="news-tile-wrapper"
                          ng-class="{ 'news-tile-wrapper--big': $first && $parent.$index === 0 }"
                        >
                          <a
                            className="news-tile"
                            ng-style="{'background-image': 'linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(//images-1.gog-statics.com/b9d1f4e5ed47c65b00bc3635e5cadc96bb4d5ed81409780dbaeedb3e774581d0_news_tile.jpg)'}"
                            ng-href="https://www.gog.com/en/news/release_stillborn_slayer "
                            gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "newsPost4" }'
                            href="https://www.gog.com/en/news/release_stillborn_slayer "
                            style={{
                              backgroundImage:
                                'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url("//images-1.gog-statics.com/b9d1f4e5ed47c65b00bc3635e5cadc96bb4d5ed81409780dbaeedb3e774581d0_news_tile.jpg")'
                            }}
                          >
                            <div
                              className="news-tile__title-wrapper"
                              ng-bind-html="news.title | trustAsHtml"
                            >
                              Release: <b>Stillborn Slayer</b>
                            </div>
                            <div className="news-tile__comments-wrapper">
                              <div className="comments-wrapper__icon-wrapper">
                                <svg className="comments-wrapper__icon-wrapper-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-comment" />
                                </svg>
                              </div>
                              <div
                                className="comments-wrapper__count-wrapper"
                                ng-bind="news.comments_count"
                              >
                                5
                              </div>
                            </div>
                            <div
                              className="news-tile__time-wrapper"
                              ng-bind="news.publish_date | elapsedTime"
                            >
                              4 days ago
                            </div>
                          </a>
                        </div>
                        {/**/}
                      </div>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </div>
              <div
                className="carousel-pagination big-arrows"
                ng-class="{ 'carousel-pagination--removed': slider.pages.length <= 1 }"
              >
                <a
                  className="carousel__nav carousel__nav--left"
                  ng-click="slider.prev()"
                >
                  <svg className="arrow-icon cc-fill-secondary cc-stroke-none">
                    <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
                  </svg>
                </a>
                <a
                  className="carousel__nav carousel__nav--right"
                  ng-click="slider.next()"
                >
                  <svg className="arrow-icon cc-fill-secondary cc-stroke-none">
                    <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
                  </svg>
                </a>
                {/**/}
                <a
                  className="carousel-pagination__page is-active"
                  ng-repeat="page in slider.pages track by $index"
                  gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "pagination: 1" }'
                  ng-click="slider.goto($index)"
                  ng-class="{
            'is-active': slider.currentPage == $index
        }"
                />
                {/**/}
                <a
                  className="carousel-pagination__page"
                  ng-repeat="page in slider.pages track by $index"
                  gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "pagination: 2" }'
                  ng-click="slider.goto($index)"
                  ng-class="{
            'is-active': slider.currentPage == $index
        }"
                />
                {/**/}
                <a
                  className="carousel-pagination__page"
                  ng-repeat="page in slider.pages track by $index"
                  gog-track-event='{ eventCategory: "news", eventAction: "click", eventLabel: "pagination: 3" }'
                  ng-click="slider.goto($index)"
                  ng-class="{
            'is-active': slider.currentPage == $index
        }"
                />
                {/**/}
              </div>
            </div>
          </div>
          {/**/}
          {/**/}
        </div>
      </div>
    </div>
  )
