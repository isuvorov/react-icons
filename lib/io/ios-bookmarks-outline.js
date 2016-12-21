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

var IoIosBookmarksOutline = function (_React$Component) {
    _inherits(IoIosBookmarksOutline, _React$Component);

    function IoIosBookmarksOutline() {
        _classCallCheck(this, IoIosBookmarksOutline);

        return _possibleConstructorReturn(this, (IoIosBookmarksOutline.__proto__ || Object.getPrototypeOf(IoIosBookmarksOutline)).apply(this, arguments));
    }

    _createClass(IoIosBookmarksOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.6 5c1.5 0 2.6 1 2.6 2.5v22.3c0 1.5-1.1 2.7-2.6 2.7h-11.2s-1.9 0.3-1.9 1.5v1h-1.3v-1c0-1.2-0.9-1.5-1.9-1.5h-11.2c-1.5 0-2.6-1.2-2.6-2.7v-22.3c0-1.5 1.1-2.5 2.6-2.5h11.7c0.8 0 1.6 0.4 2 0.9 0.5-0.5 1.3-0.9 2.1-0.9h11.7z m-14.4 27.1v-24.1c0-0.7-0.9-1.8-1.9-1.8h-11.2c-0.7 0-1.3 0.6-1.3 1.3v22.3c0 0.7 0.6 1.4 1.3 1.4h11.2c0.8 0 1.5 0.3 1.9 0.9z m5.6-25.8v7.8l1.8-1.1 0.7-0.5 0.7 0.5 1.8 1.1v-7.8h-5z m10 23.5v-22.3c0-0.7-0.5-1.2-1.2-1.2h-2.5v10.2l-3.8-2.5-3.7 2.5v-10.2h-1.2c-1 0-1.9 1-1.9 1.7v24.1c0.3-0.7 1-0.8 1.8-0.8h11.3c0.7 0 1.2-0.8 1.2-1.5z' })
                )
            );
        }
    }]);

    return IoIosBookmarksOutline;
}(React.Component);

exports.default = IoIosBookmarksOutline;
module.exports = exports['default'];