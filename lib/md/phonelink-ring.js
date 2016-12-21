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

var MdPhonelinkRing = function (_React$Component) {
    _inherits(MdPhonelinkRing, _React$Component);

    function MdPhonelinkRing() {
        _classCallCheck(this, MdPhonelinkRing);

        return _possibleConstructorReturn(this, (MdPhonelinkRing.__proto__ || Object.getPrototypeOf(MdPhonelinkRing)).apply(this, arguments));
    }

    _createClass(MdPhonelinkRing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 33.4v-26.8h-16.8v26.8h16.8z m0-31.8c1.8 0 3.2 1.6 3.2 3.4v30c0 1.8-1.4 3.4-3.2 3.4h-16.8c-1.8 0-3.2-1.6-3.2-3.4v-30c0-1.8 1.4-3.4 3.2-3.4h16.8z m6.6 14.7c2 2.2 2 5.2 0 7.2l-1.6-1.7c0.8-1.2 0.8-2.7 0-3.8z m3.5-3.5c4.2 4 4.2 10.4 0 14.2l-1.7-1.7c3-3.2 3-7.8 0-10.8z' })
                )
            );
        }
    }]);

    return MdPhonelinkRing;
}(React.Component);

exports.default = MdPhonelinkRing;
module.exports = exports['default'];