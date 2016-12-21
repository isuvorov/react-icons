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

var MdiInternetExplorer = function (_React$Component) {
    _inherits(MdiInternetExplorer, _React$Component);

    function MdiInternetExplorer() {
        _classCallCheck(this, MdiInternetExplorer);

        return _possibleConstructorReturn(this, (MdiInternetExplorer.__proto__ || Object.getPrototypeOf(MdiInternetExplorer)).apply(this, arguments));
    }

    _createClass(MdiInternetExplorer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,3L 14.0201,3.05718C 16.7976,1.7862 19.231,1.63808 20.4914,2.91793C 21.491,3.93288 21.5813,5.67171 20.9209,7.72334C 21.6092,8.99544 22,10.4521 22,12L 21.9451,13L 9.08001,13C 9.45063,15.2822 11.0648,17 13,17C 14.3087,17 15.4705,16.2144 16.2003,15L 21.4879,15C 20.2524,18.4956 16.9187,21 13,21C 11.7224,21 10.5069,20.7338 9.40609,20.2538C 6.47966,21.6799 3.88863,21.8985 2.5739,20.5635C 0.999176,18.9646 1.68109,15.5689 4,11.9931C 4.93349,10.5427 6.13558,9.0602 7.56518,7.6523L 8.38186,6.87951C 7.20597,7.56833 5.71243,8.62155 4.18642,10.1688C 5.03232,6.07633 8.6569,3 13,3 Z M 13,7.00001C 11.2089,7.00001 9.69282,8.47145 9.18312,10.5L 16.8169,10.5C 16.3072,8.47145 14.791,7.00001 13,7.00001 Z M 20.0607,4.06164C 19.4032,3.39397 18.2163,3.34719 16.7429,3.81284C 18.224,4.49105 19.4892,5.55935 20.407,6.88626C 20.7319,5.64935 20.6423,4.65218 20.0607,4.06164 Z M 3.88711,19.9898C 4.71971,20.8352 6.40101,20.6851 8.43795,19.7597C 6.59055,18.6713 5.16593,16.9419 4.46978,14.8774C 3.27108,17.1501 2.97805,19.0667 3.88711,19.9898 Z ' })
                )
            );
        }
    }]);

    return MdiInternetExplorer;
}(React.Component);

exports.default = MdiInternetExplorer;
module.exports = exports['default'];