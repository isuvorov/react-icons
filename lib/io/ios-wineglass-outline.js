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

var IoIosWineglassOutline = function (_React$Component) {
    _inherits(IoIosWineglassOutline, _React$Component);

    function IoIosWineglassOutline() {
        _classCallCheck(this, IoIosWineglassOutline);

        return _possibleConstructorReturn(this, (IoIosWineglassOutline.__proto__ || Object.getPrototypeOf(IoIosWineglassOutline)).apply(this, arguments));
    }

    _createClass(IoIosWineglassOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.6 24.1v12.2h5.7v1.2h-12.5v-1.2h5.6v-12.2c0-1.7-1.6-3-3.1-4.3-0.7-0.4-1.3-1-1.8-1.4-2.1-2.2-2-4.1-2-5.6v-0.3c0-3.4 2.4-9.8 2.5-10h10c0.1 0.2 2.5 6.6 2.5 10v0.3c0 1.5 0.1 3.4-2 5.6-0.5 0.4-1.1 1-1.7 1.4-1.6 1.3-3.2 2.6-3.2 4.3z m-4.7-20.3c-0.4 1.2-1.6 4.9-2 7.5h12.2c-0.4-2.6-1.6-6.3-2-7.5h-8.2z m4.1 17.5c0.2 0 0.4 0 0.5-0.1 0.8-0.9 1.6-1.6 2.5-2.3 0.6-0.5 1.1-0.9 1.5-1.4 1.8-1.8 1.8-3.2 1.8-4.7v-0.3h-12.5v0.3c0 1.5 0 2.9 1.7 4.7 0.4 0.5 0.9 0.9 1.5 1.4 0.9 0.7 1.8 1.4 2.5 2.3 0.1 0.1 0.3 0.1 0.5 0.1z' })
                )
            );
        }
    }]);

    return IoIosWineglassOutline;
}(React.Component);

exports.default = IoIosWineglassOutline;
module.exports = exports['default'];