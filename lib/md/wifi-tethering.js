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

var MdWifiTethering = function (_React$Component) {
    _inherits(MdWifiTethering, _React$Component);

    function MdWifiTethering() {
        _classCallCheck(this, MdWifiTethering);

        return _possibleConstructorReturn(this, (MdWifiTethering.__proto__ || Object.getPrototypeOf(MdWifiTethering)).apply(this, arguments));
    }

    _createClass(MdWifiTethering, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5c9.2 0 16.6 7.4 16.6 16.6 0 6.2-3.2 11.6-8.2 14.5l-1.8-2.9c4-2.3 6.8-6.6 6.8-11.6 0-7.3-6.1-13.2-13.4-13.2s-13.4 5.9-13.4 13.2c0 5 2.7 9.3 6.7 11.6l-1.7 2.9c-5-2.9-8.2-8.3-8.2-14.5 0-9.2 7.4-16.6 16.6-16.6z m10 16.6c0 3.7-2 7-5 8.7l-1.6-2.9c1.9-1.1 3.2-3.3 3.2-5.8 0-3.6-2.9-6.6-6.6-6.6s-6.6 3-6.6 6.6c0 2.5 1.3 4.7 3.2 5.8l-1.6 2.9c-3-1.7-5-5-5-8.7 0-5.5 4.5-10 10-10s10 4.5 10 10z m-10-3.2c1.8 0 3.4 1.4 3.4 3.2s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.2 3.4-3.2z' })
                )
            );
        }
    }]);

    return MdWifiTethering;
}(React.Component);

exports.default = MdWifiTethering;
module.exports = exports['default'];