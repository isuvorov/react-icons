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

var IoIosToggleOutline = function (_React$Component) {
    _inherits(IoIosToggleOutline, _React$Component);

    function IoIosToggleOutline() {
        _classCallCheck(this, IoIosToggleOutline);

        return _possibleConstructorReturn(this, (IoIosToggleOutline.__proto__ || Object.getPrototypeOf(IoIosToggleOutline)).apply(this, arguments));
    }

    _createClass(IoIosToggleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 25c-2 0-3.7 1.7-3.7 3.8s1.7 3.7 3.7 3.7 3.8-1.7 3.8-3.7-1.8-3.8-3.8-3.8z m0-1.2c2.7 0 5 2.2 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m19.9-1.3h-19.9c-3.4 0-6.2 2.8-6.2 6.3s2.8 6.2 6.2 6.2h20c3.4 0 6.3-2.8 6.3-6.2s-2.9-6.3-6.4-6.3z m0.1-1.2c4.1 0 7.5 3.3 7.5 7.5s-3.4 7.5-7.5 7.5h-20c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5h20z m0-13.8c-2 0-3.7 1.7-3.7 3.8s1.7 3.7 3.7 3.7 3.8-1.7 3.8-3.7-1.8-3.8-3.8-3.8z m0-1.2c2.7 0 5 2.2 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m-19.9-1.3c-3.5 0-6.3 2.8-6.3 6.3s2.8 6.2 6.2 6.2h20c3.4 0 6.3-2.8 6.3-6.2s-2.9-6.3-6.3-6.3h-19.9z m-0.1-1.2h20c4.1 0 7.5 3.3 7.5 7.5s-3.4 7.5-7.5 7.5h-20c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5z' })
                )
            );
        }
    }]);

    return IoIosToggleOutline;
}(React.Component);

exports.default = IoIosToggleOutline;
module.exports = exports['default'];