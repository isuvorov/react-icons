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

var MdGridOff = function (_React$Component) {
    _inherits(MdGridOff, _React$Component);

    function MdGridOff() {
        _classCallCheck(this, MdGridOff);

        return _possibleConstructorReturn(this, (MdGridOff.__proto__ || Object.getPrototypeOf(MdGridOff)).apply(this, arguments));
    }

    _createClass(MdGridOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 33.4h2.5l-2.5-2.5v2.5z m-3.2 0v-5.8l-1-1h-5.8v6.8h6.8z m-10-10v-5.8l-1-1h-5.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m-6.8-22.5v2.5h2.5z m10 10v2.5h2.5z m-14.5-18.8l35.8 35.8-2.1 2.1-3.4-3.4h-25.8c-1.8 0-3.2-1.4-3.2-3.2v-25.8l-3.4-3.4z m24.5 4.5v6.8h6.8v-6.8h-6.8z m-13.2 0h-2.5l-3.3-3.2h25.8c1.8 0 3.2 1.4 3.2 3.2v25.8l-3.2-3.3v-2.5h-2.5l-3.3-3.2h5.8v-6.8h-6.8v5.8l-3.2-3.3v-2.5h-2.5l-3.3-3.2h5.8v-6.8h-6.8v5.8l-3.2-3.3v-2.5z' })
                )
            );
        }
    }]);

    return MdGridOff;
}(React.Component);

exports.default = MdGridOff;
module.exports = exports['default'];