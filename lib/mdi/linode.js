'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiLinode = function (_React$Component) {
    _inherits(MdiLinode, _React$Component);

    function MdiLinode() {
        _classCallCheck(this, MdiLinode);

        return _possibleConstructorReturn(this, (MdiLinode.__proto__ || Object.getPrototypeOf(MdiLinode)).apply(this, arguments));
    }

    _createClass(MdiLinode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.11073,19.1254L 9.36729,21.5206L 8.98102,18.8831L 6.5698,16.5117L 7.11073,19.1254 Z M 9.54108,22L 9.51905,21.9979L 9.49707,21.9916L 9.48034,21.9835L 9.45363,21.9623L 6.91302,19.2652C 6.89774,19.249 6.88739,19.229 6.88289,19.2074L 6.25469,16.1734L 6.25289,16.1354C 6.25481,16.1195 6.25982,16.1043 6.26746,16.0907C 6.2774,16.073 6.29179,16.0579 6.30961,16.047L 6.98428,15.6344L 5.96613,14.6754C 5.94821,14.6585 5.93596,14.6366 5.93095,14.6125L 5.12016,10.6949L 5.11857,10.6556C 5.12057,10.6396 5.12572,10.6245 5.13347,10.611C 5.14343,10.5936 5.15782,10.5785 5.17583,10.5677L 5.18602,10.5623L 6.24351,10.0588L 4.78081,8.91878C 4.75817,8.90119 4.74299,8.87636 4.73709,8.84854L 3.65941,3.64348L 3.65798,3.60382L 3.6645,3.57735C 3.6728,3.55494 3.68778,3.53503 3.70831,3.52071L 3.7411,3.50446L 8.57105,1.99999C 8.60005,1.9909 8.63132,1.99326 8.65884,2.00655L 12.2001,3.71533L 12.2139,3.72295C 12.246,3.7442 12.2661,3.77946 12.2678,3.81818L 12.4885,8.98131C 12.4904,9.02785 12.4654,9.07132 12.4242,9.09286L 11.1098,9.77677L 12.5137,10.7197L 12.514,10.7199L 12.5206,10.7247C 12.5503,10.7478 12.5676,10.7835 12.5672,10.8215L 12.6254,12.1859L 13.9746,11.3611C 14.0144,11.3367 14.0645,11.3376 14.1034,11.3634L 15.0412,11.9828L 15.0657,10.7588C 15.0665,10.7181 15.0882,10.6805 15.123,10.6592L 17.4284,9.24979C 17.4653,9.22707 17.5114,9.22631 17.5491,9.24702L 20.2803,10.7604L 20.2841,10.7627C 20.3181,10.783 20.3398,10.8188 20.342,10.8584L 20.3412,10.8814L 19.9621,13.6865C 19.9579,13.717 19.9421,13.745 19.918,13.7643L 17.7808,15.4676C 17.7734,15.4735 17.7654,15.4785 17.757,15.4824C 17.7409,15.4899 17.7234,15.4936 17.7043,15.4936C 17.6916,15.4934 17.6788,15.4912 17.6664,15.487C 17.6607,15.4849 17.655,15.4825 17.6494,15.4796C 17.6431,15.4762 17.6371,15.4722 17.6316,15.4679L 16.8406,14.9174L 16.7609,16.2283C 16.7588,16.2623 16.7427,16.2938 16.7159,16.3152L 14.1014,18.4002L 14.0729,18.4191C 14.0567,18.4268 14.0393,18.4306 14.0217,18.4306C 14.0041,18.4306 13.9864,18.4266 13.97,18.419L 13.9444,18.4024L 12.8526,17.4835L 12.929,19.2712C 12.9306,19.3093 12.9139,19.346 12.8839,19.3701L 9.61573,21.9737L 9.59322,21.988C 9.57668,21.9963 9.55884,22 9.54108,22 Z M 16.8849,13.2004C 16.8987,13.2097 16.9102,13.2215 16.919,13.235C 16.9312,13.2537 16.9381,13.2756 16.9386,13.2984L 16.9385,13.3078L 16.9384,13.3085L 16.8577,14.6371L 17.6047,15.157L 17.8301,12.5503L 15.3013,10.9745L 15.2779,12.1392L 16.8849,13.2004 Z M 13.8771,15.3786L 12.724,14.4985L 12.7328,14.7048C 12.7348,14.7463 12.7148,14.7858 12.68,14.8092L 11.8104,15.3951L 12.7561,16.1671L 12.7831,16.1982C 12.7932,16.2151 12.7992,16.2345 12.8001,16.2548L 12.8387,17.1582L 13.8995,18.0512L 13.8771,15.3786 Z M 6.1582,14.5268L 8.6925,16.9143L 8.15772,13.2598L 5.42442,10.9826L 6.1582,14.5268 Z M 4.96286,8.75681L 7.82574,10.988L 7.06671,5.80581L 3.95096,3.86844L 4.96286,8.75681 Z M 18.0707,12.5529L 17.8497,15.1061L 19.7309,13.6065L 20.0663,11.1245L 18.0707,12.5529 Z M 14.1394,18.0633L 16.5248,16.1607L 16.6838,13.5444L 14.1172,15.3803L 14.1394,18.0633 Z M 12.6868,19.2206L 12.5699,16.4863L 9.22294,18.8809L 9.62957,21.6562L 12.6868,19.2206 Z M 7.30978,5.81098L 8.08202,11.082L 12.2458,8.91536L 12.0354,3.99514L 7.30978,5.81098 Z M 8.4002,13.2608L 8.9521,17.0316L 12.4904,14.6479L 12.3357,11.0207L 8.4002,13.2608 Z ' })
                )
            );
        }
    }]);

    return MdiLinode;
}(React.Component);

exports.default = MdiLinode;
module.exports = exports['default'];