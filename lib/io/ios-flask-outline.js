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

var IoIosFlaskOutline = function (_React$Component) {
    _inherits(IoIosFlaskOutline, _React$Component);

    function IoIosFlaskOutline() {
        _classCallCheck(this, IoIosFlaskOutline);

        return _possibleConstructorReturn(this, (IoIosFlaskOutline.__proto__ || Object.getPrototypeOf(IoIosFlaskOutline)).apply(this, arguments));
    }

    _createClass(IoIosFlaskOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 28.9c0.7 1.3 0.9 2.5 0.9 3.6-0.1 2.8-2.1 5-4.9 5h-20c-2.8 0-5-2.1-5.1-5 0-1.1 0.3-2.3 0.9-3.6l9.1-15.2v-9.9h-1.2v-1.3h2.5v2.5h3.7v1.3h-3.7v2.5h2.5v1.2h-2.5v2.5h3.7v1.3h-3.7v0.2l-0.2 0.3-1.2 2h3.9v1.2h-4.6l-7.2 12c-1 2-1.1 3.4-0.1 5 0.7 1 1.8 1.8 3.2 1.8h20c1.3 0 2.6-0.7 3.2-1.8 0.4-0.6 0.5-1.3 0.5-2 0-0.9-0.2-2-0.8-3l-9-15.2-0.3-0.3v-11.5h2.5v1.3h-1.2v9.9z m-25.7 0.4l5.7-9.3h11.9l5.6 9.3c0.6 0.9 0.8 1.9 0.8 2.6-0.1 1.9-1.2 3.1-3.6 3.1h-17.6c-2.4 0-3.6-0.9-3.6-3.1 0-0.7 0.3-1.7 0.8-2.6z m16.9-8h-10.5l-5.3 8.6c-0.4 0.6-0.7 1.5-0.7 2 0 1 0.4 1.3 0.5 1.4 0.3 0.3 1 0.5 1.9 0.5h17.6c0.8 0 1.4-0.3 1.8-0.6 0.3-0.3 0.6-0.8 0.6-1.4 0-0.5-0.3-1.3-0.7-1.9z' })
                )
            );
        }
    }]);

    return IoIosFlaskOutline;
}(React.Component);

exports.default = IoIosFlaskOutline;
module.exports = exports['default'];