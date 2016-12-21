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

var IoIosSpeedometerOutline = function (_React$Component) {
    _inherits(IoIosSpeedometerOutline, _React$Component);

    function IoIosSpeedometerOutline() {
        _classCallCheck(this, IoIosSpeedometerOutline);

        return _possibleConstructorReturn(this, (IoIosSpeedometerOutline.__proto__ || Object.getPrototypeOf(IoIosSpeedometerOutline)).apply(this, arguments));
    }

    _createClass(IoIosSpeedometerOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 5c9.7 0 17.5 7.8 17.5 17.5 0 4.5-1.6 8.4-4.4 11.6-0.3 0.3-0.5 0.6-0.8 0.9l-0.8-0.8-0.1-0.1c-1.5-1.4-3.2-2.6-5.1-3.4-2-0.9-4.1-1.2-6.3-1.2s-4.3 0.3-6.3 1.2c-1.9 0.8-3.6 2-5.1 3.4l-0.1 0.1-0.8 0.8c-0.3-0.3-0.5-0.6-0.8-0.9-2.8-3.2-4.4-7.1-4.4-11.6 0-9.7 7.8-17.5 17.5-17.5z m15 23.8c0.8-1.8 1.2-3.7 1.3-5.7h-2.5v-1.2h2.5c-0.1-2-0.5-3.9-1.3-5.7-0.7-1.7-1.8-3.3-3-4.7l-2.2 2.1-0.8-0.9h-0.1l2.1-2.1c-1.4-1.3-3-2.4-4.7-3.1-1.8-0.8-3.7-1.2-5.8-1.2v2.9h-1.2v-2.9c-2 0-3.8 0.4-5.6 1.2-1.7 0.8-3.4 1.8-4.8 3.1l2.1 2.1-0.8 0.9-2.2-2.1c-1.2 1.4-2.3 3-3 4.7-0.8 1.8-1.2 3.8-1.3 5.8h2.5v1.2h-2.5c0.1 2 0.5 3.8 1.3 5.6 0.7 1.6 1.6 3.1 2.7 4.4 3.2-3.1 7.5-5 12.3-5s9.1 1.9 12.3 5c1.1-1.3 2-2.8 2.7-4.4z m-6.2-15.1l0.1 0-5.9 6.6c0.5 0.6 0.8 1.4 0.8 2.2 0 2-1.8 3.8-3.8 3.8-0.8 0-1.5-0.4-2.1-0.8l-1 1-0.9-0.9 1-0.9c-0.5-0.6-0.7-1.4-0.7-2.2 0-2 1.7-3.8 3.7-3.8 0.8 0 1.5 0.3 2.1 0.7z m-8.8 11.3c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z' })
                )
            );
        }
    }]);

    return IoIosSpeedometerOutline;
}(React.Component);

exports.default = IoIosSpeedometerOutline;
module.exports = exports['default'];