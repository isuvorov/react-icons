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

var IoIosCircleFilled = function (_React$Component) {
    _inherits(IoIosCircleFilled, _React$Component);

    function IoIosCircleFilled() {
        _classCallCheck(this, IoIosCircleFilled);

        return _possibleConstructorReturn(this, (IoIosCircleFilled.__proto__ || Object.getPrototypeOf(IoIosCircleFilled)).apply(this, arguments));
    }

    _createClass(IoIosCircleFilled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m0 31.1c8.2 0 14.9-6.7 14.9-14.9s-6.7-14.9-14.9-14.9-15 6.7-15 14.9 6.7 14.9 15 14.9z m0-27.4c6.8 0 12.5 5.6 12.5 12.5s-5.7 12.5-12.5 12.5-12.5-5.6-12.5-12.5 5.6-12.5 12.5-12.5z' })
                )
            );
        }
    }]);

    return IoIosCircleFilled;
}(React.Component);

exports.default = IoIosCircleFilled;
module.exports = exports['default'];