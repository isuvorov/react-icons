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

var IoIosCloudOutline = function (_React$Component) {
    _inherits(IoIosCloudOutline, _React$Component);

    function IoIosCloudOutline() {
        _classCallCheck(this, IoIosCloudOutline);

        return _possibleConstructorReturn(this, (IoIosCloudOutline.__proto__ || Object.getPrototypeOf(IoIosCloudOutline)).apply(this, arguments));
    }

    _createClass(IoIosCloudOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.7 18.2c3.5 0 6.3 2.9 6.3 6.5 0 3.5-2.9 6.5-6.4 6.5h-21.6c-3.9 0.1-7-3.2-7-7.1 0-3.2 2-5.6 4.8-6.5 0.4-2.2 2.2-4.1 4.6-4.1 0.8 0 1.4 0.2 2 0.5 1.5-3.1 4.6-5.2 8.2-5.2 5 0 9.1 4.1 9.1 9.1 0 0.1 0 0.2 0 0.3z m-0.1 11.8c2.9 0 5.2-2.5 5.2-5.4s-2.3-5.2-5.2-5.2h-1.2v-1.7c0-4.3-3.6-7.7-7.9-7.7-2.9 0-5.7 1.8-7 4.5l-0.5 1.1-1.1-0.5c-0.4-0.3-1-0.4-1.5-0.4-1.7 0-3.2 1.3-3.5 3l0 0.7-0.7 0.3c-2.4 0.8-4 2.9-4 5.4 0.1 3.2 2.6 5.9 5.8 5.9h21.6z' })
                )
            );
        }
    }]);

    return IoIosCloudOutline;
}(React.Component);

exports.default = IoIosCloudOutline;
module.exports = exports['default'];