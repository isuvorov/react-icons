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

var IoIosLoopStrong = function (_React$Component) {
    _inherits(IoIosLoopStrong, _React$Component);

    function IoIosLoopStrong() {
        _classCallCheck(this, IoIosLoopStrong);

        return _possibleConstructorReturn(this, (IoIosLoopStrong.__proto__ || Object.getPrototypeOf(IoIosLoopStrong)).apply(this, arguments));
    }

    _createClass(IoIosLoopStrong, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 3.8c9 0 16.3 7.2 16.3 16.2 0 1.1-0.1 2.2-0.4 3.3l0 0.3-1.9-0.4 0.1-0.3c0.1-0.9 0.3-1.9 0.3-2.9 0-7.9-6.5-14.4-14.4-14.4-5.2 0-9.9 2.8-12.5 7.4l-0.2 0.2-1.6-0.9 0.2-0.3c2.9-5 8.2-8.2 14.1-8.2z m12.5 23.2l0.2-0.2 1.6 0.9-0.2 0.3c-2.8 5-8.2 8.2-14.1 8.2-9 0-16.2-7.2-16.2-16.2 0-1.1 0-2.2 0.3-3.3l0-0.3 1.9 0.4-0.1 0.3c-0.1 0.9-0.3 1.9-0.3 2.9 0 7.9 6.5 14.4 14.4 14.4 5.2 0 9.9-2.8 12.5-7.4z m-2.5-7h10l-5 5z m-30 0l5-5 5 5h-10z' })
                )
            );
        }
    }]);

    return IoIosLoopStrong;
}(React.Component);

exports.default = IoIosLoopStrong;
module.exports = exports['default'];