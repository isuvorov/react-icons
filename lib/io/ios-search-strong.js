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

var IoIosSearchStrong = function (_React$Component) {
    _inherits(IoIosSearchStrong, _React$Component);

    function IoIosSearchStrong() {
        _classCallCheck(this, IoIosSearchStrong);

        return _possibleConstructorReturn(this, (IoIosSearchStrong.__proto__ || Object.getPrototypeOf(IoIosSearchStrong)).apply(this, arguments));
    }

    _createClass(IoIosSearchStrong, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.9 23.3l-0.3 0.5 8.4 8.5-2.7 2.7-8.4-8.5-0.5 0.4c-1.9 1.1-4.2 1.9-6.5 1.9-6.6 0-11.9-5.4-11.9-11.9s5.3-11.9 11.9-11.9 11.9 5.3 11.9 11.9c0 2.3-0.8 4.5-1.9 6.4z m-3.4-13.1c-1.8-1.8-4.1-2.7-6.6-2.7s-4.9 0.9-6.7 2.7-2.7 4.2-2.7 6.7 0.9 4.8 2.7 6.6 4.2 2.8 6.7 2.8 4.8-1 6.6-2.8 2.8-4.1 2.8-6.6-1-4.9-2.8-6.7z' })
                )
            );
        }
    }]);

    return IoIosSearchStrong;
}(React.Component);

exports.default = IoIosSearchStrong;
module.exports = exports['default'];