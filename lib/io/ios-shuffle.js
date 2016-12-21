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

var IoIosShuffle = function (_React$Component) {
    _inherits(IoIosShuffle, _React$Component);

    function IoIosShuffle() {
        _classCallCheck(this, IoIosShuffle);

        return _possibleConstructorReturn(this, (IoIosShuffle.__proto__ || Object.getPrototypeOf(IoIosShuffle)).apply(this, arguments));
    }

    _createClass(IoIosShuffle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 16.2l-0.8-1 4.8-3.9h-3.5c-7.3 0-10.1 5.8-12.9 10.8-0.1 0.2-0.2 0.5-0.4 0.7-1.5 2.9-3.2 4.8-5 5.9-1.1 0.6-2.6 1.3-5.5 1.3v-1.3c3.7 0 6.5-1 9.5-6.5 0.1-0.2 0.2-0.5 0.3-0.7 2.8-5.1 5.9-11.5 14-11.5h3.5l-4.8-4.1 0.8-0.9 6.7 5.6z m-12.8 1c0 0.1 0.1 0.1 0.1 0.2-0.2 0.4-0.4 0.9-0.7 1.3 0-0.1-0.1-0.1-0.1-0.2-0.1-0.2-0.2-0.5-0.3-0.7-3-5.5-5.7-6.5-9.5-6.5v-1.3c2.9 0 4.4 0.7 5.5 1.3 1.8 1.1 3.5 3 5 5.9z m12.8 6.6l6.7 5.6-6.7 5.6-0.8-0.9 4.8-4.1h-3.5c-6 0-9.3-3.5-11.7-7.4 0.1-0.2 0.2-0.4 0.2-0.6 0.2-0.2 0.4-0.5 0.5-0.8 2.4 4 5.2 7.5 11 7.5h3.5l-4.8-3.9z' })
                )
            );
        }
    }]);

    return IoIosShuffle;
}(React.Component);

exports.default = IoIosShuffle;
module.exports = exports['default'];