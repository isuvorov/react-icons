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

var FaDashboard = function (_React$Component) {
    _inherits(FaDashboard, _React$Component);

    function FaDashboard() {
        _classCallCheck(this, FaDashboard);

        return _possibleConstructorReturn(this, (FaDashboard.__proto__ || Object.getPrototypeOf(FaDashboard)).apply(this, arguments));
    }

    _createClass(FaDashboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.6 25.7q0-1.2-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m4.3-10q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m9.5 10.7l2.3-8.5q0.1-0.6-0.2-1.1t-0.9-0.6-1 0.1-0.7 0.9l-2.3 8.5q-1.3 0.1-2.3 1t-1.5 2.2q-0.4 1.7 0.5 3.3t2.6 2 3.3-0.5 2-2.6q0.3-1.3-0.2-2.6t-1.6-2z m14.7-0.7q0-1.2-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m-14.2-14.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m10 4.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m7.1 10q0 5.8-3.1 10.8-0.5 0.6-1.3 0.6h-31.2q-0.8 0-1.3-0.6-3.1-4.9-3.1-10.8 0-4 1.6-7.8t4.2-6.3 6.4-4.3 7.8-1.6 7.8 1.6 6.4 4.3 4.2 6.3 1.6 7.8z' })
                )
            );
        }
    }]);

    return FaDashboard;
}(React.Component);

exports.default = FaDashboard;
module.exports = exports['default'];