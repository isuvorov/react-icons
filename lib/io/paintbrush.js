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

var IoPaintbrush = function (_React$Component) {
    _inherits(IoPaintbrush, _React$Component);

    function IoPaintbrush() {
        _classCallCheck(this, IoPaintbrush);

        return _possibleConstructorReturn(this, (IoPaintbrush.__proto__ || Object.getPrototypeOf(IoPaintbrush)).apply(this, arguments));
    }

    _createClass(IoPaintbrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.2 22.1c4.1 0 8 3.2 7.1 8-0.9 4-4.3 5.5-7.1 6-2.3 0.4-7.8 0-9.2-2.7 1.9-0.7 2.7-2.1 2.7-3.9 0-3.8 2.5-7.4 6.5-7.4z m24.9-17.4c1 1 1.3 2.3 0.4 3.5l-12.1 13.7c0.2 0.7 0.1 1.3-0.2 1.8l-3.9 4.5c-0.2 0.2-0.3 0.2-0.5 0-0.1-0.1-0.1-0.2-0.1-0.2v-0.1c0.2-4.1-3.2-6.8-6.9-7h-0.2s-0.1 0-0.1-0.1c-0.2-0.2-0.2-0.3 0-0.5l4.6-3.8c0.4-0.3 1.1-0.3 1.8-0.2l13.7-12c1.1-0.9 2.4-0.6 3.5 0.4z m-23.6 15.6z' })
                )
            );
        }
    }]);

    return IoPaintbrush;
}(React.Component);

exports.default = IoPaintbrush;
module.exports = exports['default'];