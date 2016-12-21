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

var MdThumbDown = function (_React$Component) {
    _inherits(MdThumbDown, _React$Component);

    function MdThumbDown() {
        _classCallCheck(this, MdThumbDown);

        return _possibleConstructorReturn(this, (MdThumbDown.__proto__ || Object.getPrototypeOf(MdThumbDown)).apply(this, arguments));
    }

    _createClass(MdThumbDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 5h6.8v20h-6.8v-20z m-6.6 0c1.8 0 3.4 1.6 3.4 3.4v16.6c0 0.9-0.4 1.7-1.1 2.3l-10.9 11.1-1.8-1.8c-0.5-0.5-0.7-1.1-0.7-1.8v-0.5l1.6-7.7h-10.5c-1.8 0-3.4-1.4-3.4-3.2l0.1-0.2h-0.1v-3.2c0-0.5 0.1-0.9 0.3-1.2l5.1-11.8c0.4-1.1 1.6-2 3-2h15z' })
                )
            );
        }
    }]);

    return MdThumbDown;
}(React.Component);

exports.default = MdThumbDown;
module.exports = exports['default'];