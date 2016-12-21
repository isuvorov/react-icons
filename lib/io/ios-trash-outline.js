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

var IoIosTrashOutline = function (_React$Component) {
    _inherits(IoIosTrashOutline, _React$Component);

    function IoIosTrashOutline() {
        _classCallCheck(this, IoIosTrashOutline);

        return _possibleConstructorReturn(this, (IoIosTrashOutline.__proto__ || Object.getPrototypeOf(IoIosTrashOutline)).apply(this, arguments));
    }

    _createClass(IoIosTrashOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31 8.8v1.2h-1.6l-1.8 22.7c0 1.3-1.1 2.3-2.3 2.3h-11c-1.3 0-2.3-1-2.3-2.3l-1.9-22.7h-1.6v-1.2h6.2v-1.5c0-1.3 1.1-2.3 2.3-2.3h5.5c1.2 0 2.2 1 2.2 2.3v1.5h6.3z m-15.1-1.5v1.5h7.7v-1.5c0-0.7-0.5-1.1-1.1-1.1h-5.5c-0.6 0-1.1 0.4-1.1 1.1z m10.6 25.4l1.8-22.7h-17l1.8 22.7v0c0 0.7 0.6 1.1 1.2 1.1h11c0.6 0 1.2-0.4 1.2-1.1v0z m-7.3-1.4v-18.8h1.1v18.8h-1.1z m5.6-18.8l-0.9 18.8h-1.1l0.8-18.8h1.2z m-9 0l0.9 18.8h-1.1l-0.8-18.8h1z' })
                )
            );
        }
    }]);

    return IoIosTrashOutline;
}(React.Component);

exports.default = IoIosTrashOutline;
module.exports = exports['default'];