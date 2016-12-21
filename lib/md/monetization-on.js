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

var MdMonetizationOn = function (_React$Component) {
    _inherits(MdMonetizationOn, _React$Component);

    function MdMonetizationOn() {
        _classCallCheck(this, MdMonetizationOn);

        return _possibleConstructorReturn(this, (MdMonetizationOn.__proto__ || Object.getPrototypeOf(MdMonetizationOn)).apply(this, arguments));
    }

    _createClass(MdMonetizationOn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.3 30.2c2.9-0.6 5.3-2.2 5.3-5.3 0-4.2-3.7-5.7-7.1-6.5s-4.3-1.8-4.3-3.2c0-1.6 1.5-2.8 4-2.8 2.6 0 3.6 1.3 3.6 3.1h3.3c-0.1-2.5-1.6-4.8-4.8-5.6v-3.3h-4.4v3.3c-2.9 0.6-5.2 2.4-5.2 5.3 0 3.5 2.8 5.1 7 6.1 3.7 0.9 4.4 2.2 4.4 3.6 0 1-0.7 2.7-3.9 2.7-3.1 0-4.3-1.4-4.5-3.1h-3.3c0.2 3.2 2.7 5 5.5 5.6v3.3h4.4v-3.2z m-2.3-26.8c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdMonetizationOn;
}(React.Component);

exports.default = MdMonetizationOn;
module.exports = exports['default'];