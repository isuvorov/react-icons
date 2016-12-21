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

var IoIosCloudyNightOutline = function (_React$Component) {
    _inherits(IoIosCloudyNightOutline, _React$Component);

    function IoIosCloudyNightOutline() {
        _classCallCheck(this, IoIosCloudyNightOutline);

        return _possibleConstructorReturn(this, (IoIosCloudyNightOutline.__proto__ || Object.getPrototypeOf(IoIosCloudyNightOutline)).apply(this, arguments));
    }

    _createClass(IoIosCloudyNightOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.8 17.5c-2.7 0-5 2.2-5 4.8v1l0.1 0.8c-0.4 0-0.9 0-1.1 0-1.5 0.3-2.5 1.4-2.5 2.9 0 0.8 0.2 1.5 0.7 2.1s1.3 0.8 2.1 0.8h12.2c2.1 0 3.9-1.7 3.9-3.8s-1.8-3.9-3.9-3.9c-0.1 0-0.3 0.1-0.4 0.1l-1.1 0.1-0.3-1.1c-0.2-1.1-0.8-2-1.7-2.7s-1.9-1.1-3-1.1z m0-1.2c2.9 0 5.3 2 5.9 4.7h0.6c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.2-5.1 5.2h-12.2c-2.2 0-4.1-1.9-4.1-4.2 0-2.1 1.6-4 3.7-4.1v-0.7c0-3.3 2.7-6.1 6.1-6.1z m18.4 7.6c0.6 0 1.2-0.1 1.8-0.3-0.3 0.5-0.7 1.1-1.1 1.6-1.6 1.8-3.9 3.2-6.6 3.5 0.4-0.5 0.5-1 0.7-1.5 1.5-0.3 2.8-1 3.9-2-1.4 0-2.8-0.4-3.9-1-1.8-0.8-3.3-2.2-4.4-4-1.1-1.6-1.7-3.7-1.7-5.8 0-1.2 0.1-2.4 0.5-3.5-1.9 1-3.3 2.6-4.1 4.6-0.4-0.1-1-0.3-1.4-0.3 1.1-2.9 3.5-5.1 6.4-6.1 0.6-0.1 1.2-0.3 1.9-0.4-0.4 0.5-0.7 1.1-1 1.6-0.6 1.3-0.9 2.7-0.9 4.1 0 2.5 0.9 4.9 2.7 6.7s4.2 2.8 6.7 2.8h0.5z' })
                )
            );
        }
    }]);

    return IoIosCloudyNightOutline;
}(React.Component);

exports.default = IoIosCloudyNightOutline;
module.exports = exports['default'];