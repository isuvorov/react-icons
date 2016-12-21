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

var MdSdCard = function (_React$Component) {
    _inherits(MdSdCard, _React$Component);

    function MdSdCard() {
        _classCallCheck(this, MdSdCard);

        return _possibleConstructorReturn(this, (MdSdCard.__proto__ || Object.getPrototypeOf(MdSdCard)).apply(this, arguments));
    }

    _createClass(MdSdCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 13.4v-6.8h-3.4v6.8h3.4z m-5 0v-6.8h-3.4v6.8h3.4z m-5 0v-6.8h-3.4v6.8h3.4z m10-10q1.3 0 2.3 0.9t1.1 2.3v26.8q0 1.3-1.1 2.3t-2.3 0.9h-20q-1.3 0-2.3-0.9t-1.1-2.3l0.1-20 9.9-10h13.4z' })
                )
            );
        }
    }]);

    return MdSdCard;
}(React.Component);

exports.default = MdSdCard;
module.exports = exports['default'];