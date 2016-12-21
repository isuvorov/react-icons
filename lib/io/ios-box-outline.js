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

var IoIosBoxOutline = function (_React$Component) {
    _inherits(IoIosBoxOutline, _React$Component);

    function IoIosBoxOutline() {
        _classCallCheck(this, IoIosBoxOutline);

        return _possibleConstructorReturn(this, (IoIosBoxOutline.__proto__ || Object.getPrototypeOf(IoIosBoxOutline)).apply(this, arguments));
    }

    _createClass(IoIosBoxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 18.8h-5c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.3 1.2 1.3h5c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2z m0-1.3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h5z m10-8.7v6.2h-1.2v16.3h-22.5v-16.3h-1.3v-6.2h25z m-2.5 21.2v-15h-20v15h20z m1.3-16.2v-3.8h-22.5v3.8h22.5z' })
                )
            );
        }
    }]);

    return IoIosBoxOutline;
}(React.Component);

exports.default = IoIosBoxOutline;
module.exports = exports['default'];