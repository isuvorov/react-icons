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

var IoIosCalendarOutline = function (_React$Component) {
    _inherits(IoIosCalendarOutline, _React$Component);

    function IoIosCalendarOutline() {
        _classCallCheck(this, IoIosCalendarOutline);

        return _possibleConstructorReturn(this, (IoIosCalendarOutline.__proto__ || Object.getPrototypeOf(IoIosCalendarOutline)).apply(this, arguments));
    }

    _createClass(IoIosCalendarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.3 8.8v5h27.5v-5z m21.2-1.3h7.5v27.5h-30v-27.5h7.5v-2.5h1.3v2.5h12.5v-2.5h1.2v2.5z m6.3 26.3v-18.8h-27.5v18.8h27.5z m0-20v-5h-6.3v2.5h-1.2v-2.5h-12.5v2.5h-1.3v-2.5h-6.2v5h27.5z' })
                )
            );
        }
    }]);

    return IoIosCalendarOutline;
}(React.Component);

exports.default = IoIosCalendarOutline;
module.exports = exports['default'];