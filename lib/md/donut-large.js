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

var MdDonutLarge = function (_React$Component) {
    _inherits(MdDonutLarge, _React$Component);

    function MdDonutLarge() {
        _classCallCheck(this, MdDonutLarge);

        return _possibleConstructorReturn(this, (MdDonutLarge.__proto__ || Object.getPrototypeOf(MdDonutLarge)).apply(this, arguments));
    }

    _createClass(MdDonutLarge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 31.6c5-0.7 9.3-5 10-10h5c-0.7 8.4-6.6 14.3-15 15v-5z m10-13.2c-0.7-5-5-9.3-10-10v-5c8.4 0.7 14.3 6.6 15 15h-5z m-13.2-10c-5 0.8-10 5.7-10 11.6s5 10.8 10 11.6v5c-8.4-0.8-15-7.9-15-16.6s6.6-15.8 15-16.6v5z' })
                )
            );
        }
    }]);

    return MdDonutLarge;
}(React.Component);

exports.default = MdDonutLarge;
module.exports = exports['default'];